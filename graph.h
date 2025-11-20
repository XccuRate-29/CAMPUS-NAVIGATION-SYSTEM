#ifndef GRAPH_H
#define GRAPH_H

#define MAX_ROOMS 100

typedef struct {
    int id;
    char name[50];
    int floor;
} Room;

extern int graph[MAX_ROOMS][MAX_ROOMS];
extern Room rooms[MAX_ROOMS];
extern int roomCount;

void initGraph();
void addRoom(int id, const char *name, int floor);
void addConnection(int from, int to, int distance);
void displayGraph();

#endif
