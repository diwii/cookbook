package com.company;

// GaussJordan.java

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int rows = 3; // Matricas izmērs
        Matrix m = new Matrix(rows, rows); // Izveido matricu no rindām
        Random r = new Random(); // izveido random skaitli

        double A[][] = {
                {1,2,3},
                {5,2,7},
                {9,10,11}};

        for (int row = 0; row < rows; ++row) { // Pieņemu te aizpilda matricu ar random skaitļiem
            for (int column = 0; column < rows; ++column)
                m.set(row, column, A[row][column]);
        }


        System.out.println("Matrix:");
        m.print();
        System.out.println("Inverse:");
        Matrix inv = m.inverse();
        inv.print();
        System.out.println("Product of matrix and inverse:");
        Matrix.product(m, inv).print();
    }
}

