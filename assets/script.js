function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico
}

function Consultorio(nombre, paciente = []) {
    this._nombre = nombre;
    this._pacientes = paciente;  
}


Paciente.prototype.getNombre = function() {
    return this._nombre;
};

Paciente.prototype.setNombre = function(nombre) {
    this._nombre = nombre;
};

Paciente.prototype.getEdad = function() {
    return this._edad;
};

Paciente.prototype.setEdad = function(edad) {
    this._edad = edad;
};

Paciente.prototype.getRut = function() {
    return this._rut;
};

Paciente.prototype.setRut = function(rut) {
    this._rut = rut;
};

Paciente.prototype.getDiagnostico = function() {
    return this._diagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._diagnostico = diagnostico;
};


function Consultorio(nombre, paciente = []) {
    this._nombre = nombre;
    this._paciente = paciente;
}

Consultorio.prototype.getNombre = function() {
    return this._nombre;
};

Consultorio.prototype.setNombre = function(nombre) {
    this._nombre = nombre;
};

Consultorio.prototype.getPaciente = function() {
    return this._paciente;
};

Consultorio.prototype.setPaciente = function(paciente) {
    this._paciente = paciente;
};


Consultorio.prototype.buscarPacientePorNombre = function(nombre) {
    return this._paciente.find(paciente => paciente.getNombre() === nombre);
};


Consultorio.prototype.mostrarTodosLosPacientes = function() {
    this._paciente.forEach(paciente => {
        console.log(`Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, RUT: ${paciente.getRut()}, Diagnóstico: ${paciente.getDiagnostico()}`);
    });
};


const paciente1 = new Paciente("Luis Orellana", 35, "16456893-5", "Gripe");
const paciente2 = new Paciente("Miguel Moreno", 20, "918453623-1", "Alergia");


const consultorio1 = new Consultorio("Consultorio Ñuñoa", [paciente1, paciente2]);


consultorio1.mostrarTodosLosPacientes();

const pacienteEncontrado = consultorio1.buscarPacientePorNombre("Luis Orellana");
console.log("Paciente encontrado:", pacienteEncontrado);
