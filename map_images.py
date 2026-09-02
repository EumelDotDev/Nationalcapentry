import json

log_file = "/Users/kobe/.gemini/antigravity-ide/brain/8201ff66-3810-406b-909c-202410e41947/.system_generated/logs/transcript_full.jsonl"
names = []
files = []

for line in open(log_file):
    if "generate_image" in line:
        data = json.loads(line)
        if "tool_calls" in data:
            for tc in data["tool_calls"]:
                if tc["name"] == "generate_image":
                    args = tc.get("args", {})
                    if "ImageName" in args:
                        name = args["ImageName"].strip('"')
                        names.append(name)
        elif "output" in data.get("content", "") and "media_" in data["content"]:
            # extract media_xxxx.png
            import re
            m = re.search(r'(media_\d+\.png)', data["content"])
            if m:
                files.append(m.group(1))

print("Found names:", names)
print("Found files:", files)
