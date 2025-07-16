import os
import requests

API_KEY = os.getenv("GEMINI_API_KEY")
ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY

with open("first_1000.txt") as f:
    lines = [l.strip() for l in f.readlines()[:1000]]

chunks = [lines[i:i+20] for i in range(0, 1000, 20)]
summaries = []

for idx, chunk in enumerate(chunks):
    prompt = f"Summarize these Factorio actions (as a human would, high-level, 1-2 sentences, for RL state-action episode):\n{chr(10).join(chunk)}"
    data = {"contents": [{"parts": [{"text": prompt}]}]}
    r = requests.post(ENDPOINT, json=data)
    try:
        summary = r.json()["candidates"][0]["content"]["parts"][0]["text"]
    except Exception as e:
        print(e)
    summaries.append(f"Chunk {idx+1}: {summary}")

with open("factorio_mvp_trace.txt", "w") as out:
    for s in summaries:
        out.write(s + "\n") 
