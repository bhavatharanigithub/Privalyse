def calculate_score(risks):
    return max(0, 100 - len(risks) * 10)
