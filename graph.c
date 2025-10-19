#include <stdio.h>
#include <string.h>
#include "graph.h"

int graph[MAX_ROOMS][MAX_ROOMS];
Room rooms[MAX_ROOMS];
int roomCount = 0;

void initGraph() {
    for (int i = 0; i < MAX_ROOMS; i++) {
        for (int j = 0; j < MAX_ROOMS; j++) {
            graph[i][j] = 0;
        }
    }
}

void addRoom(int id, const char *name, int floor) {
    rooms[roomCount].id = id;
    strcpy(rooms[roomCount].name, name);
    rooms[roomCount].floor = floor;
    roomCount++;
}

void addConnection(int from, int to, int distance) {
    graph[from][to] = distance;
    graph[to][from] = distance; // undirected
}

void displayGraph() {
    printf("\n--- Graph Connections ---\n");
    for (int i = 0; i < roomCount; i++) {
        printf("%s -> ", rooms[i].name);
        for (int j = 0; j < roomCount; j++) {
            if (graph[i][j] != 0) {
                printf("%s(%d) ", rooms[j].name, graph[i][j]);
            }
        }
        printf("\n");
    }
}
