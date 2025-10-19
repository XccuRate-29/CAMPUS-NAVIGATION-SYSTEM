#include <stdio.h>
#include "graph.h"
#include "dijkstra.h"
#include "path_printer.h"
#include "auth.h"

int main() {
    initGraph();
    // sample rooms (use the same ids as you add)
    addRoom(0, "MainGate", 0);
    addRoom(1, "Library", 0);
    addRoom(2, "CSEDept", 1);
    addRoom(3, "Auditorium", 1);

    addConnection(0, 1, 5);
    addConnection(1, 2, 10);
    addConnection(0, 3, 8);
    addConnection(3, 2, 2);

    int start = 0, end = 2;

    // Print shortest route
    printShortestDirections(graph, roomCount, start, end);

    // Print second shortest route
    printSecondShortestDirections(graph, roomCount, start, end);

    return 0;
}
