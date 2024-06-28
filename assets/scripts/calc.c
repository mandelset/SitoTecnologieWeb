#include <emscripten.h>

// utilizzando il sdk di emscripten, ho eseguito il comando:
// emcc calc.c -s WASM=1 -o calc.js
// il quale mi ritorna il programma C compilato in WASM e il wrapper JS che mi permetterà di includerlo in un sito Web.
// la macro EMSCTRIPTEN_KEEPALIVE (contenuta nell'header emscripten.h) è necessaria per, appunto, mantenere la funzione costantemente attiva

int EMSCRIPTEN_KEEPALIVE add(int a, int b) {

    return a + b;
}

int EMSCRIPTEN_KEEPALIVE subtract(int a, int b) {

    return a - b;
}

int EMSCRIPTEN_KEEPALIVE multiply(int a, int b) {

    return a * b;
}

float EMSCRIPTEN_KEEPALIVE divide(int a, int b) {

    return a / (float) b;
}
