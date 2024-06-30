// eventualmente in futuro importare le pagine come file js esterni?

const Home = {
    template: `
    <main>
        <article>
            <h2 class="text-center m-4">What is this website?</h2>
			<!-- la classe img-fluid rende le immagini responsive -->
           	<figure class="text-center"> 
				<img src="../assets/images/emscripten_logo.png" class="figure-img img-fluid " style="width: 500px;" alt="Emscripten Logo"/>
				<figcaption class="figure-caption">Emscripten, the compiler used to build the example of this website</figcaption>
           	</figure> 
            <p class="text-center m-4 p-2 bg-body-secondary">
                This website utizilies technology able to convert C/C++ programs into web-assembly; This allows us to run such programs in the browser web. The use of script in web-assembly enables us to obtain better performance and optimized code, with this being very useful to calculation-focused applications (such as games and mathematical-oriented programs).
            </p>
           	<figure class="text-center"> 
				<img src="../assets/images/ClangWasm.png" class="figure-img img-fluid" style="width: 500px;" alt="Emscripten Toolchain"/>
            	<figcaption class="figure-caption">An example showing how simple the Emscripten toolchain could be</figcaption>
       		</figure> 
		</article>
    </main>
    `,
    mounted() {
        // test per vedere se la pagina viene montata
        // poi da rimuovere
        console.log("Home mounted")
    }
};

const AboutES = {
    template: `
    <main>
        <article>
            <h2 class="text-center m-4">What is Emscripten?</h2>
            <p class="text-center m-4 p-2 bg-body-secondary">
                Emscripten is a compiler that converts C and C++ code into WebAssembly (WASM) or JavaScript, allowing developers to run native code in web browsers or Node.js environments. Here's a brief history of Emscripten and an overview of what it does.
            </p>
            <h3 class="text-center m-4 text-light-emphasis">Early days (2010-2011)</h3>
            <p class="text-center m-4 p-2 bg-body-secondary">
                Emscripten was created by Alon Zakai, a Mozilla engineer, in 2010. At the time, Zakai was working on a project to port the Quake III Arena game engine to run in a web browser. He realized that compiling C code to JavaScript would be a more efficient approach than rewriting the entire engine in JavaScript. Zakai's initial implementation, called "Emscripten," was a simple C-to-JavaScript compiler.
            </p>
			
			<figure class="text-center">
				<img src="../assets/images/quake3.jpeg" class="figure-img img-fluid" style="width: 500px;" alt="Quake 3 Arena screenshot"/>
				<figcaption class="figure-caption">A screenshot of id Software's game, Quake 3 Arena</figcaption>
			</figure>
            
			<h3 class="text-center m-4 text-light-emphasis">Development and growth (2011-2013)</h3>
            <p class="text-center m-4 p-2 bg-body-secondary">
                In 2011, Emscripten was open-sourced and gained popularity as a tool for porting native games and applications to the web. The compiler was initially based on the LLVM compiler infrastructure project, which provided a robust framework for building compilers. Emscripten's development accelerated, and it began to support more C and C++ features, including dynamic linking, exceptions, and RTTI (Run-Time Type Information).
            </p>
            <h3 class="text-center m-4 text-light-emphasis">WebAssembly (2015)</h3>
            <p class="text-center m-4 p-2 bg-body-secondary">
                In 2015, the WebAssembly (WASM) project was announced, aiming to provide a binary instruction format for the web. Emscripten was one of the first compilers to support WASM, and it became a key player in the WASM ecosystem. With WASM, Emscripten could generate more efficient and portable code, which could be executed by web browsers and Node.js environments without the need for JavaScript.
            </p>

            <figure class="text-center">
				<img src="../assets/images/ut99.png" class="figure-img img-fluid" style="width: 500px;" alt="UT99 ported to Emscripten"/>
				<figcaption class="figure-caption">Classic game Unreal Tournament, running on a web browser thanks to Emscripten</figcaption>
			</figure>

            <h3 class="text-center m-4 text-light-emphasis">Modern Emscripten (2016-present)</h3>
            <div class="text-center m-4 p-2 bg-body-secondary">
                Today, Emscripten is a mature compiler that supports a wide range of C and C++ features, including:
                <ul>
                    <li>WebAssembly (WASM) generation: Emscripten can compile C and C++ code to WASM, which is executed by web browsers and Node.js environments.</li>
                    <li>JavaScript generation: Emscripten can also compile C and C++ code to JavaScript, which is useful for older browsers or environments that don't support WASM.</li>
                    <li>Multi-threading support: Emscripten supports multi-threading through Web Workers, allowing developers to take advantage of multiple CPU cores.</li>
                    <li>Dynamic linking: Emscripten supports dynamic linking, enabling the creation of shared libraries and plugins.</li>
                    <li>Emulation of native APIs: Emscripten provides emulations of native APIs, such as OpenGL, OpenAL, and SDL, allowing developers to port native applications with minimal modifications.</li>
                </ul>
            </div>

            <figure class="text-center">
				<img src="../assets/images/EmscriptenToolchain.png" class="figure-img img-fluid" style="width: 500px;" alt="Emscripten toolchain diagram"/>
				<figcaption class="figure-caption">Diagram showing how Emscripten SDK toolchain works step by step</figcaption>
			</figure>

            <h3 class="text-center m-4 text-light-emphasis">Emscripten's Uses</h3>
            <div class="text-center m-4 p-2 bg-body-secondary">
                Emscripten is widely used in various industries, including:
                <ul>
                    <li>Gaming: Emscripten has been used to port popular games like Quake III Arena, Doom, and Unreal Tournament to the web.</li>
                    <li>Scientific computing: Emscripten is used in scientific computing to run complex simulations and data analysis in web browsers.</li>
                    <li>Enterprise software: Emscripten is used in enterprise software to port native applications to the web, reducing the need for native installations.</li>
                </ul>
            </div>
			
            <figure class="text-center">
				<img src="../assets/images/d3wasm.jpg" class="figure-img img-fluid" style="width: 500px;" alt="Doom 3 ported to WASM"/>
				<figcaption class="figure-caption">id tech 4, an advanced game engine, ported to Web Assembly</figcaption>
			</figure>

			<figure class="text-center">
            	<img src="../assets/images/screen1.jpg" class="figure-img img-fluid" style="width: 500px;" alt="Emscripten app screenshot"/>
            	<figcaption class="figure-caption">Unreal Engine 3 ported to Web, thanks to Emscripten</figcaption>
			</figure>

        </article>
    </main>
    `,
    mounted() {
        console.log("About ES mounted")
    }
};

const AboutUs = {
    template: `
    <main>
        <article>
            <h2>Who are we?</h2>
            <p>We are two university students following a computer science course. This is our project for web technologies.
                <br>You will find our contacts down below.
            </p>
            <h3>Emails</h3>
            <p>tommaso.bedetti@studio.unibo.it
                <br>
                <br>biagio.fino@studio.unibo.it</p>
            <h3>Phone numbers</h3>
            <img src="../assets/images/8bd1d2bc19aeaafe37d5a559be1a017b.jpg" alt="Nuh uh"/>
        </article>
    </main>
    `,
    mounted() {
        console.log("About Us mounted")
    }
};

const BasicCalc = {
    data() {
        return {
            result: "",
            num1: "",
            num2: ""
        }
    },
    template: `
    <main>
        <h2 class="text-center m-4">Calculator</h2>
        <p class="text-center m-4 p-2 bg-body-secondary">
           A basic calculator
        </p>
        <div class="d-flex flex-row mb-4 text-center justify-content-center gap-3">
            <input v-model="num1" placeholder="Number 1" type="number" class="form-control p-2">
            <input v-model="num2" placeholder="Number 2" type="number" class="form-control p-2">
        </div>
        <p class="text-center m-4 p-2">
            Result is {{ result }}
        </p>
        <div class="d-flex flex-row mb-4 text-center justify-content-center gap-3">
            <button class="btn btn-primary p-2" v-on:click="add">Add</button>
            <button class="btn btn-primary p-2" v-on:click="subtract">Subtract</button>
            <button class="btn btn-primary p-2" v-on:click="multiply">Multiply</button>
            <button class="btn btn-primary p-2" v-on:click="divide">Divide</button>
        </div>
    </main>
    `,
    mounted() {
        console.log("Calculator mounted");
    },
    methods: {
        add() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { add } = results.instance.exports;
                this.result = (add(this.num1, this.num2).toPrecision(2));
            });
        },
        subtract() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { subtract } = results.instance.exports;
                this.result = (subtract(this.num1, this.num2).toPrecision(2));
            });
        },
        multiply() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { multiply } = results.instance.exports;
                this.result = (multiply(this.num1, this.num2).toPrecision(2));
            });
        },
        divide() {
            fetch("/assets/scripts/calc.wasm")
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const { divide } = results.instance.exports;
                this.result = (divide(this.num1, this.num2).toPrecision(2));
            });
        }
    }
};

const Scene3D = {
    template: `
    <main>
        <h2 class="text-center m-4">3D scene</h2>
        <p class="text-center m-4 p-2 bg-body-secondary">A basic 3D scene</p>
    </main>
    `,
    data() {

    }
};

const DataManager = {
    template: `
        <main>
            <h2 class="text-center m-4">Data Manager</h2>
        </main>
    `
}

const Table = {
    data() {
        return {
            datas: null,
        };
    },
    template: `
        <main>
            <h2 class="text-center m-4">Table</h2>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col" class="text-center">Application</th>
                        <th scope="col" class="text-center">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in datas">
                        <td class="text-center">{{ data.id }}</td>
                        <td class="text-center">{{ data.application }}</td>
                        <td class="text-center">{{ data.type }}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    `,
    methods: {
        fetchData() {
            axios.get("./assets/data.json").then(response => {
                this.datas = response.data;
            });
        }
    },
    mounted() {
        this.fetchData();
    }
}

// define VueRoute routes
const routes = [
    { path: '/', component: Home },
    { path: '/about_es', component: AboutES },
    { path: '/about_us', component: AboutUs },
    { path: '/scene_3d', component: Scene3D},
    { path: '/basic_calc', component: BasicCalc },
    { path: '/data_manager', component: DataManager},
    { path: '/table', component: Table}
];

// create VueRouter 
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

// create Vue app
const app = Vue.createApp({});
app.use(router);
app.mount('#app');
