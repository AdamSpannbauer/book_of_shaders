#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;


void main() {
	vec2 mouse = u_mouse / u_resolution;
	vec2 p = gl_FragCoord.xy / u_resolution;
	gl_FragColor = vec4(p.x, p.y,mouse.x,mouse.y);
}
