# import matplotlib.pyplot as plt
import os
import time
import numpy as np
import pandas as pd

from cuml.manifold import TSNE


def load_glove_embeddings():
    if not os.path.exists('./src_py/data/glove.6B.100d.npy'):
        print('Parsing Glove Embeddings')
        words = []
        embeddings = []
        with open(f'./src_py/data/glove.6B.100d.txt','r') as f:
            for line in f:
                values=line.split()
                word=values[0]
                vectors=np.asarray(values[1:],'float32')
                words += [word]
                embeddings += [vectors]
        f.close()
        words = np.vstack(words)
        embeddings = np.vstack(embeddings)
        np.save(f'./src_py/data/words.npy', words)
        np.save(f'./src_py/data/glove.6B.100d.npy', embeddings)
        return words, embeddings
    else:
        words = np.load('./src_py/data/words.npy')
        embeddings = np.load('./src_py/data/glove.6B.100d.npy')
    return words, embeddings

start = time.time()
words, embeddings = load_glove_embeddings()
print('words.shape', words.shape)
print('embeddings.shape', embeddings.shape)

tsne = TSNE(n_components=2, perplexity=50)
X_hat = tsne.fit_transform(embeddings)

print("X_hat.shape", X_hat.shape)
print(f"time {time.time()-start}")

# Save dataframe
tsne_df = pd.DataFrame({'word': words[:, 0], 
                        'x': X_hat[:,0],
                        'y': X_hat[:,1]})

tsne_df.to_csv('./src_py/data/tsne_glove.csv', index=False)
