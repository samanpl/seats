import json

data = {}
for i in range(1, 112 + 1):
    data[i] = ""

if input('are you sure for rewrite file(y/n)? ').lower() in ['yes', 'y']:
    try:
        with open('../links.json', 'w') as json_file:
            json.dump(data, json_file, indent=4)
        print('links.json successfully created!')
    except Exception as e:
        print(f'we have an error during making file: {e}')
