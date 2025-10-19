#ifndef PATH_PRINTER_H
#define PATH_PRINTER_H

// prints step-by-step directions for shortest and second-shortest paths
// graph: adjacency matrix, n: number of nodes, start/end: node ids
// rooms[] and roomCount are expected to be available from graph.c (extern)
void printShortestDirections(int graph[][100], int n, int start, int end);
void printSecondShortestDirections(int graph[][100], int n, int start, int end);

#endif
