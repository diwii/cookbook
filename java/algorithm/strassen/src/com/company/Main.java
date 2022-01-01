package com.company;

public class Main {

    static float[][] dotProduct(float[][] matrixA, float[][] matrixB) {
        int n = matrixA.length;
        float [][] result = new float[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    result[i][j] = result[i][j] + matrixA[i][k] * matrixB[k][j];
                }
                System.out.printf("%f ", result[i][j]);
            }
            System.out.println();
        }



        return result;
    }

    public static void main(String[] args) {
        float[][] A = {
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };
        float[][] B = {
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };

        dotProduct(A,B);
    }
}
