# Load libraries
from pandas import read_csv
from pandas.plotting import scatter_matrix
from matplotlib import pyplot
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import StratifiedKFold
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC

# Load dataset
# https://raw.githubusercontent.com/jbrownlee/Datasets/master/iris.csv
url = "iris.csv"
names = ['sepal-length', 'sepal-width', 'petal-length', 'petal-width', 'class']
dataset = read_csv(url, names = names)

# Dimensions of Dataset

#print(dataset.shape)

# Peek at the Data

#print(dataset.head(20))

# Statistical Summary

#print(dataset.describe())

# Class Distribution

#print(dataset.groupby('class').size())


#
# Data Visualization
#

# Univariate Plots - plots of each individual variable,
# Box and Whisker plots

#dataset.plot(kind='box', subplots=True, layout=(2,2), sharex=False, sharey=False)
#pyplot.show()

# Histogram

#dataset.hist()
#pyplot.show()

#
# Multivariate Plots
#

# Scatter plot matrix

#scatter_matrix(dataset)
#pyplot.show()
