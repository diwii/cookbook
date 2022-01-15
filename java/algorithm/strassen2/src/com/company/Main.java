package com.company;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    static void printMatrix(int[][] matrix) {
        for (int[] line : matrix) {
            int i = 0;
            StringBuilder sb = new StringBuilder(matrix.length);
            for (int number : line) {
                if (i != 0) {
                    sb.append("\t");
                } else {
                    i++;
                }
                sb.append(number);
            }
            System.out.println(sb.toString());
        }
    }

    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> A = new ArrayList<ArrayList<Integer>>();
        A.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));
        A.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));
        A.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));
        A.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));

        ArrayList<ArrayList<Integer>> B = new ArrayList<ArrayList<Integer>>();
        B.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));
        B.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));
        B.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));
        B.add(new ArrayList<Integer>(Arrays.asList(1,2,3,4)));

        MatrixMultiplication.LEAF_SIZE = 4;

        int[][] C = MatrixMultiplication.strassen(A, B);
        printMatrix(C);
    }
}
