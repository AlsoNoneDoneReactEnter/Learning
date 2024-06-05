print("Bem-vindo! Por favor, digite números inteiros positivos terminados em 0.")
soma = 0
qtd = 0

while True:
    try:
        num = int(input("Digite um número inteiro positivo terminado em 0: "))
        if num < 0 or num % 10 != 0:
            print("Número inválido. Por favor, digite um número inteiro positivo terminado em 0.")
        else:
            qtd += 1
            soma += num
            continuar = input("Deseja adicionar outro número? (s/n): ")
            if continuar.lower() == 'n':
                media = soma // qtd
                print(f"A média dos valores inseridos é: {media}")
                break
    except ValueError:
        print("Por favor, digite um número inteiro positivo terminado em 0.") 