#ifndef DIJKSTRA_H
#define DIJKSTRA_H

#define INF 2147483647
#define MAX_NODES 100

// compute shortest path and fill parent[]; returns distance or INF if no path
int dijkstraWithParent(int graph[][100], int n, int start, int end, int parent[]);

// compute second shortest path (Yen-style) and fill secondParent[]; returns distance or INF if none
int findSecondShortestWithParent(int graph[][100], int n, int start, int end, int secondParent[]);

// convenience: simple print of shortest path (keeps backward compatibility)
void dijkstraPrint(int graph[][100], int n, int start, int end);

#endif
