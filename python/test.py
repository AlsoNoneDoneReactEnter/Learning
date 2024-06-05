# Dados da tabela
data = [
    {"Previsão": "Sol", "Temperatura": "Quente", "Umidade": "Alta", "Vento": "Forte", "Jogar Tênis": "Não"},
    {"Previsão": "Sol", "Temperatura": "Quente", "Umidade": "Alta", "Vento": "Forte", "Jogar Tênis": "Não"},
    # Adicione os outros dados aqui
]

# Contagem de ocorrências das condições x quando não jogamos tênis
count_x_given_not_tennis = sum(1 for entry in data if entry["Jogar Tênis"] == "Não" and
                               entry["Previsão"] == "Sol" and entry["Temperatura"] == "Quente" and
                               entry["Umidade"] == "Alta" and entry["Vento"] == "Forte")

# Probabilidade de não jogar tênis
total_not_tennis = sum(1 for entry in data if entry["Jogar Tênis"] == "Não")
prob_not_tennis = total_not_tennis / len(data)

# Probabilidade de ocorrência das condições x
total_x = sum(1 for entry in data if entry["Previsão"] == "Sol" and entry["Temperatura"] == "Quente" and
              entry["Umidade"] == "Alta" and entry["Vento"] == "Forte")
prob_x = total_x / len(data)

# Calculando a probabilidade de não jogar tênis dado x
prob_not_tennis_given_x = (count_x_given_not_tennis / total_not_tennis) * prob_not_tennis / prob_x

print(prob_not_tennis_given_x)
 