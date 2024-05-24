import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv("../dataset/mushroom.csv")


season = df["season"]


d = {"s":0, "u":0, "a":0, "w":0}
for i in season:
    d[i] += 1


plt.plot(d.keys(), d.values())
plt.show()




