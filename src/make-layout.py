import json

x = 8 * 2 # rows
y = 7 # columns
data = [[0 for _ in range(y)] for _ in range(x)]

curr = 1
right = 1
for i in range(x):
    if right:
        for j in range(y - 1, -1, -1):
            data[i][j] = curr
            curr += 1
    else:
        for j in range(y):
            data[i][j] = curr
            curr += 1
    right = 1 - right
        
try:
    with open('../layout.json', 'w') as json_file:
        json.dump(data, json_file)
    print('layout.json successfully created!')
except Exception as e:
    print(f'we have an error during making file: {e}')