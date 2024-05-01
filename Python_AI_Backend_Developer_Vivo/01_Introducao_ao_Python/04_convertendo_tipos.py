print("Inteiro-Float")
preco = 10
print(preco)

preco = float(preco)
print(preco)

preco = 10 / 2
print(preco)
print("Fim-Inteiro-Float")

print("Inicio-Float-Inteiro")
preco = 10.30
print(preco)

preco = int(preco)
print(preco)
print("Fim-Float-Inteiro")

print("Inicio-conversao-por-divisao")
preco = 10
print(preco)

print(preco / 2)
print(preco // 2)
print("Fim-Conversao-por-Divisao")

print("Inicio-numerico-String")
preco = 10.50
idade = 28

print(str(preco))

print(str(idade))

texto = f"idade {idade} preco {preco}"
print(texto)
print("Fim-numerico-String")

print("Inicio-Erro-de-Conversao")
preco = "python"
print(float(preco))
print("Fim-Erro-de-Conversao")

print("Inicio-Principais-Conversoes")
print("usando o tipo int, os números após . ou , serão ignorados pelo interpretador",int(1.97348728)) 
print(int("10"))
print(float("10.10"))
print(float(100))

valor = 10
valor_str = str(valor)
print(type(valor))
print(type(valor_str))

print(100 / 2)
print(100 // 2)
print("Fim-Principais-Conversoes")
