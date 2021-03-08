import time

def clckCal(clck1,clck2):

    clck1=time.mktime(time.strptime(clck1,"%M:%S"))
    clck2=time.mktime(time.strptime(clck2,"%M:%S"))
    clck2 -= clck1
    #print(type(clck2))
    for i in range(int(clck2),0,-1):
        if i<=5:
            print(f"ataque en {i}s")
        else:
            print(f"faltan {i} segundos")
        time.sleep(1)

tmPropio = str(input("ingrese su hora en formato MM:SS: "))
tmCompa = str(input("ingrese la hora de su compa en formato MM:SS: "))
clckCal(tmPropio,tmCompa)
