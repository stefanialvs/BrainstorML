# https://rapids.ai/start.html#get-rapids
conda create -n brainstorml -c rapidsai -c nvidia -c conda-forge -c defaults \
blazingsql=0.18 cuml=0.18 python=3.7 cudatoolkit=11.0
source ~/anaconda3/etc/profile.d/conda.sh
conda activate brainstorml
conda install pandas
conda install -c conda-forge hyperopt
conda install matplotlib
conda install scikit-learn
conda install pytorch==1.4.0 -c pytorch
conda install jupyterlab
conda install jupyter
# conda install -c anaconda gensim
# conda install smart_open==2.0.0