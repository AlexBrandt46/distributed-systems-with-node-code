function a() {
    console.log("Hello from function a before b() is called!");
    b();
    console.log("Hello from function a after b() is called!");
}

function b() {
    console.log("Hello from function b before c() is called!");
    c();
    console.log("Hello from function b after c() is called!");
}

function c() {
    console.log("Hello from function c!");
}

function x() {
    console.log("Hello from function x before y() is called!");
    y();
    console.log("Hello from function x after y() is called!");
}

function y() {
    console.log("Hello from function y before z() is called!");
    z();
    console.log("Hello from function y after z() is called!");
}

function z() {
    console.log("Hello from function z!");
}

setTimeout(x, 0);
a();
