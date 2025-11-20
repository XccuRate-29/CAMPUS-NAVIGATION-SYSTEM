#include <stdio.h>
#include "graph.h"
#include "dijkstra.h"
#include "path_printer.h"
#include "auth.h"

int main() {
    int choice;
    int loggedIn = 0;

    // Authentication menu
    while (!loggedIn) {
        printf("\n=== Campus Navigation System ===\n");
        printf("1. Login\n");
        printf("2. Register\n");
        printf("3. Exit\n");
        printf("Enter choice: ");
        if (scanf("%d", &choice) != 1) {
            printf("Invalid input.\n");
            while (getchar() != '\n'); // clear input buffer
            continue;
        }

        if (choice == 1) {
            loggedIn = loginUser();
        } else if (choice == 2) {
            registerUser();
        } else if (choice == 3) {
            printf("Goodbye!\n");
            return 0;
        } else {
            printf("Invalid choice.\n");
        }
    }

    // Initialize graph with sample data
    initGraph();
    addRoom(0, "MainGate", 0);
    addRoom(1, "Library", 0);
    addRoom(2, "CSEDept", 1);
    addRoom(3, "Auditorium", 1);

    addConnection(0, 1, 5);
    addConnection(1, 2, 10);
    addConnection(0, 3, 8);
    addConnection(3, 2, 2);

    // Navigation menu
    while (1) {
        printf("\n=== Navigation Menu ===\n");
        printf("1. Find shortest path\n");
        printf("2. Find alternative (second shortest) path\n");
        printf("3. Display graph\n");
        printf("4. Logout\n");
        printf("Enter choice: ");
        
        if (scanf("%d", &choice) != 1) {
            printf("Invalid input.\n");
            while (getchar() != '\n');
            continue;
        }

        if (choice == 4) {
            printf("Logged out successfully.\n");
            break;
        }

        if (choice == 3) {
            displayGraph();
            continue;
        }

        if (choice == 1 || choice == 2) {
            int start, end;
            printf("\nAvailable rooms:\n");
            for (int i = 0; i < roomCount; i++) {
                printf("%d: %s (Floor %d)\n", i, rooms[i].name, rooms[i].floor);
            }
            
            printf("Enter start room ID: ");
            if (scanf("%d", &start) != 1 || start < 0 || start >= roomCount) {
                printf("Invalid start room.\n");
                while (getchar() != '\n');
                continue;
            }
            
            printf("Enter destination room ID: ");
            if (scanf("%d", &end) != 1 || end < 0 || end >= roomCount) {
                printf("Invalid destination room.\n");
                while (getchar() != '\n');
                continue;
            }

            if (start == end) {
                printf("Start and destination are the same!\n");
                continue;
            }

            if (choice == 1) {
                printShortestDirections(graph, roomCount, start, end);
            } else {
                printSecondShortestDirections(graph, roomCount, start, end);
            }
        } else {
            printf("Invalid choice.\n");
        }
    }

    return 0;
}
