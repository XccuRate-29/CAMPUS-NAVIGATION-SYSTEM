#include <stdio.h>
#include <limits.h>
#include <stdbool.h>
#include <string.h>
#include "dijkstra.h"

static int minDistance(int dist[], bool visited[], int n) {
    int min = INF, min_index = -1;
    for (int v = 0; v < n; v++)
        if (!visited[v] && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    return min_index;
}

// core Dijkstra that fills parent[] and returns distance to end (or INF_INT)
int dijkstraWithParent(int graph[][100], int n, int start, int end, int parent[]) {
    int dist[MAX_NODES];
    bool visited[MAX_NODES];

    for (int i = 0; i < n; i++) {
        dist[i] = INF;
        visited[i] = false;
        parent[i] = -1;
    }

    dist[start] = 0;

    for (int count = 0; count < n - 1; count++) {
        int u = minDistance(dist, visited, n);
        if (u == -1) break;
        visited[u] = true;

        for (int v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] && dist[u] != INF &&
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
                parent[v] = u;
            }
        }
    }

    return dist[end];
}

void dijkstraPrint(int graph[][100], int n, int start, int end) {
    int parent[MAX_NODES];
    int dist = dijkstraWithParent(graph, n, start, end, parent);
    if (dist == INF) {
        printf("\nNo path found.\n");
        return;
    }
    printf("\nShortest Path Distance: %d\nPath: %d", dist, start);
    // print path from parent
    int stack[MAX_NODES], top = -1;
    for (int v = end; v != -1; v = parent[v]) stack[++top] = v;
    while (top >= 0) {
        printf(" -> %d", stack[top--]);
    }
    printf("\n");
}

// ============================================================
// Yen-style 2nd shortest with parents:
// iterate removing each edge in the shortest path and re-run Dijkstra
// ============================================================
int findSecondShortestWithParent(int graph[][100], int n, int start, int end, int secondParent[]) {
    int parent[MAX_NODES];
    int bestDist = dijkstraWithParent(graph, n, start, end, parent);

    if (bestDist == INF) {
        // no shortest path exists
        return INF;
    }

    // extract nodes of best path into an array (in order start -> end)
    int path[MAX_NODES];
    int pathLen = 0;
    for (int v = end; v != -1; v = parent[v]) path[pathLen++] = v;
    // reverse to get start..end
    for (int i = 0; i < pathLen / 2; i++) {
        int tmp = path[i];
        path[i] = path[pathLen - i - 1];
        path[pathLen - i - 1] = tmp;
    }

    int secondBest = INF;
    int tempGraph[100][100];
    int tempParent[MAX_NODES];

    // copy original
    memcpy(tempGraph, graph, sizeof(int) * 100 * 100);

    // for every edge on the shortest path, temporarily remove it and rerun Dijkstra
    for (int i = 0; i < pathLen - 1; i++) {
        int u = path[i];
        int v = path[i + 1];

        int saved = tempGraph[u][v];
        tempGraph[u][v] = tempGraph[v][u] = 0; // remove undirected edge

        int altDist = dijkstraWithParent(tempGraph, n, start, end, tempParent);

        if (altDist != INF && altDist > bestDist && altDist < secondBest) {
            secondBest = altDist;
            // copy parent to secondParent
            for (int k = 0; k < n; k++) secondParent[k] = tempParent[k];
        }

        // restore
        tempGraph[u][v] = tempGraph[v][u] = saved;
    }

    return secondBest;
}
