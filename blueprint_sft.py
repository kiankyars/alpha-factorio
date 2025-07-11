import json
import torch
from torch.utils.data import Dataset, DataLoader
from transformers import AutoTokenizer, AutoModelForCausalLM, TrainingArguments, Trainer
from pathlib import Path

class BlueprintDataset(Dataset):
    def __init__(self, blueprint_dir, tokenizer, max_length=2048):
        self.tokenizer = tokenizer
        self.max_length = max_length
        self.data = self._load_blueprints(blueprint_dir)
    
    def _load_blueprints(self, blueprint_dir):
        data = []
        for json_file in Path(blueprint_dir).rglob("*.json"):
            with open(json_file, 'r') as f:
                blueprint = json.load(f)
                # Format: "Build a mining setup" -> blueprint JSON
                text = f"Build a {json_file.stem}:\n{json.dumps(blueprint, indent=2)}"
                data.append(text)
        return data
    
    def __len__(self):
        return len(self.data)
    
    def __getitem__(self, idx):
        text = self.data[idx]
        encoding = self.tokenizer(
            text, 
            truncation=True, 
            padding='max_length', 
            max_length=self.max_length,
            return_tensors='pt'
        )
        return {k: v.squeeze() for k, v in encoding.items()}

def train_blueprint_sft():
    # Load model
    model_name = "tencent/Hunyuan-A13B-Instruct"  # or base
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(model_name)
    
    # Dataset
    dataset = BlueprintDataset(
        "fle/agents/data/blueprints_to_policies/blueprints/", 
        tokenizer
    )
    
    # Training
    training_args = TrainingArguments(
        output_dir="./blueprint_sft_model",
        num_train_epochs=3,
        per_device_train_batch_size=4,
        gradient_accumulation_steps=4,
        learning_rate=5e-5,
        warmup_steps=100,
        logging_steps=10,
        save_steps=500,
        dataloader_pin_memory=False,
    )
    
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
    )
    
    trainer.train()
    trainer.save_model()

if __name__ == "__main__":
    train_blueprint_sft()