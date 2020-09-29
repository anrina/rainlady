import matplotlib.pyplot as plt
import math as m
x=[]
y=[]
for i in range(-100,100):
    y.append(m.sin(i))
for h in range(-100,100):
    x.append(h)

plt.plot(x,y)

plt.legend()
plt.show()
    
