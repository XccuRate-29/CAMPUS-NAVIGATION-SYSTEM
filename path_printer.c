#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "path_printer.h"
#include "dijkstra.h"
#include "graph.h"   // to access rooms[] and roomCount

// helper: build path array from parent[]; returns length (path is start..end)
static int buildPathFromParent(int parent[], int n, int start, int end, int outPath[]) {
    int rev[MAX_NODES];
    int revLen = 0;
    for (int v = end; v != -1; v = parent[v]) {
        rev[revLen++] = v;
    }
    // if last element of rev is not start, no valid path
    if (revLen == 0 || rev[revLen - 1] != start) return 0;
    // reverse into outPath
    for (int i = 0; i < revLen; i++) {
        outPath[i] = rev[revLen - 1 - i];
    }
    return revLen;
}

static void printPathNodes(int path[], int len) {
    if (len == 0) {
        printf("No path available.\n");
        return;
    }
    printf("Step-by-step directions (%d steps):\n", len - 1);
    for (int i = 0; i < len; i++) {
        int node = path[i];
        if (i == 0)
            printf("Start at: [%d] %s (Floor %d)\n", node, rooms[node].name, rooms[node].floor);
        else
            printf("Then go to: [%d] %s (Floor %d)\n", node, rooms[node].name, rooms[node].floor);
    }
}

// public: shortest path directions
void printShortestDirections(int graph[][100], int n, int start, int end) {
    int parent[MAX_NODES];
    int dist = dijkstraWithParent(graph, n, start, end, parent);
    if (dist == INF) {
        printf("No shortest path found from %d to %d.\n", start, end);
        return;
    }

    int path[MAX_NODES];
    int len = buildPathFromParent(parent, n, start, end, path);
    printf("\n=== Shortest Route ===\nDistance: %d\n", dist);
    printPathNodes(path, len);
}

// public: second shortest directions
void printSecondShortestDirections(int graph[][100], int n, int start, int end) {
    int secondParent[MAX_NODES];
    // initialize secondParent to -1 for safety
    for (int i = 0; i < n; i++) secondParent[i] = -1;

    int dist = findSecondShortestWithParent(graph, n, start, end, secondParent);
    if (dist == INF) {
        printf("\nNo second-shortest (alternative) path found from %d to %d.\n", start, end);
        return;
    }

    int path[MAX_NODES];
    int len = buildPathFromParent(secondParent, n, start, end, path);
    printf("\n=== Second Shortest Route ===\nDistance: %d\n", dist);
    printPathNodes(path, len);
}
