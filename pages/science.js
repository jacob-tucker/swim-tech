export default function Science() {
  return (
    <div className="container">
      <article>
        <h2>The Science of Swimming</h2>
        <p className="section-header">Introduction</p>
        <p>
          In this section, we will talk about the science behind swimming, including
          hydrodynamics, the science of treading, and more.
        </p>
        <img src="/underwater.jpg" alt="underwater picture" />
        <p className="section-header">Why learn about science?</p>
        <p>
          Learning how to swim, and more specifically learning how to swim optimally,
          is a fantastic skill to have in sports and in daily life. It's important to understand
          how your body stays afloat, and ways you can reduce effort when treading and/or swimming.
        </p>
        <p className="section-header">Hydrodynamics</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uyBJGQ7wU2M" title="Hydrodynamics of Swimming" allow="fullscreen"></iframe>
        <p>
          Hydrodynamics allows us to understand how different forces impact us in the water.
          For example, <br />
          <b>Water Resistance</b>: <br />
          - Water is ~1000x more resistant than air (~700x more dense) <br />
          - Most swimmer’s effort goes into reducing this <br />
          <b>Buoyancy</b>: <br />
          - An upward force causing you to float <br />
          - The closer to the top, the greater your buoyancy <br />
          <b>Propulsion Forces</b> <br />
          - Dragging with arms, kicking with feet <br />
          - Resistance of the water against your forward motion <br />
          - Lift force of water <br />
          <b>Streamline Force</b> <br />
          - Smaller bodies move faster <br />

          <i>As a swimmer, the overall goal is to REDUCE DRAG when swimming.</i>
        </p>

        <p className="section-header">Treading Water</p>
        <img src="/treading.jpg" alt="treading water picture" />
        <p>
          In order to properly tread water, you follow these steps: <br />
          1. Move your arms side to side. <br />
          2. Rotary kick - rotate legs like an eggbeater. <br />
          3. Keep your body from going up and down - wastes energy!
        </p>
      </article>
    </div>

  );
}
