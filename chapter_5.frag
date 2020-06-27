#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


float plot(vec2 st, float pct){
  return  smoothstep(pct - 0.08, pct, st.y) -
          smoothstep(pct, pct + 0.5, st.y);
}


void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	
	float y = pow(st.x, 3.0);
	vec3 color = vec3(y);

	// Plot a line
    float pct = plot(st,y);
    color = (1.0 - pct) * color + pct * vec3(st.y,1.0,st.x);

	gl_FragColor = vec4(color,1.0);
}