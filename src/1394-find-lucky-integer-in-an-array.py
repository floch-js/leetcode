def findLucky(arr):
    count_map = {}

    for n in arr:
        count_map[n] = count_map.get(n, 0) + 1

    lucky = -1

    for n, occurs in count_map.items():
        if n == occurs:
            lucky = max(n, lucky)
    return lucky

arr = [2, 2, 3, 4]
output = findLucky(arr)

print(output)
