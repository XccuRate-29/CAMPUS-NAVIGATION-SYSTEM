#include <stdio.h>
#include <string.h>
#include "auth.h"

#define MAX_USERS 100

typedef struct {
    char email[100];
    char password[50];
} User;

int loginUser() {
    char email[100], password[50];
    char fileEmail[100], filePass[50];
    int found = 0;

    printf("\n--- Login ---\n");
    printf("Enter email: ");
    scanf("%s", email);
    printf("Enter password: ");
    scanf("%s", password);

    FILE *f = fopen("users.txt", "r");
    if (!f) {
        printf("No user database found. Please register first.\n");
        return 0;
    }

    while (fscanf(f, "%s %s", fileEmail, filePass) == 2) {
        if (strcmp(email, fileEmail) == 0 && strcmp(password, filePass) == 0) {
            found = 1;
            break;
        }
    }

    fclose(f);
    if (found) {
        printf("Login successful!\n");
        return 1;
    } else {
        printf("Invalid credentials.\n");
        return 0;
    }
}

int registerUser() {
    char email[100], password[50];
    printf("\n--- Register ---\n");
    printf("Enter email: ");
    scanf("%s", email);
    printf("Enter password: ");
    scanf("%s", password);

    FILE *f = fopen("users.txt", "a");
    if (!f) {
        printf("Error opening user file.\n");
        return 0;
    }
    fprintf(f, "%s %s\n", email, password);
    fclose(f);
    printf("Registration successful!\n");
    return 1;
}
    