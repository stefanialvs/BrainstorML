conda create -n wembeds python=3.7
source ~/anaconda3/etc/profile.d/conda.sh
conda activate wembeds
conda install pandas
conda install -c conda-forge hyperopt
conda install matplotlib
conda install scikit-learn
conda install pytorch==1.4.0 -c pytorch
conda install jupyterlab