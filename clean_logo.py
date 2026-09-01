from PIL import Image
import os

img = Image.open('public/logo.png').convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # item is (R, G, B, A)
    # the green arrow is around rgb(0, 255, 128) - wait, it's easier to just find the bounding box of the actual logo or crop the left.
    # Let's crop it first.
    pass

# Better approach:
width, height = img.size
# crop left 20 pixels to remove green arrow, crop top/bottom/right 10 pixels for safety if needed
left = 25
top = 0
right = width
bottom = height
img = img.crop((left, top, right, bottom))

datas = img.getdata()
newData = []
for item in datas:
    # black background
    if item[0] < 35 and item[1] < 35 and item[2] < 35:
        newData.append((0, 0, 0, 0))
    # maybe remove pure green pixels just in case?
    elif item[1] > 150 and item[0] < 100 and item[2] < 100:
        newData.append((0, 0, 0, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save('public/logo-clean.png', "PNG")
print("Cleaned logo saved to public/logo-clean.png")
