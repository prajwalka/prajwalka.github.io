---
layout: default
title: "Research"
permalink: /research/
---


<h1> Key Research Projects </h1>

<section class="research-section">
  <h2>Postdoctoral Research</h2>

  <figure class="figure-block">
      <img src="/Photos/PostdocOverview.png" alt="Overview of postdoctoral research" class="research-image">
      <figcaption class="figure-caption">Figure references: Nikitin et al. (2023), Wang et al. (2021), Chunxian et al. (2011), bjhighstar.com, refractorymetal.com, titanium.com</figcaption>
  </figure>

  <p>
    This research is currently being conducted in the <a href="https://cmrl.jhu.edu/" target="_blank">Computational Mechanics Research Laboratory (CMRL)</a> headed by Dr. Somnath Ghosh at Johns Hopkins University and is funded by the Office of Naval Research. Our current experimental collaborators include Dr. Julian Avila from São Paulo State University.
  </p>

  <p> 
      Polycrystalline materials such as titanium and aluminum alloys are of high commercial importance due to their use in critical components across the automotive, aerospace, marine, and biomedical industries. This is attributed to their exceptional properties, including high specific strength, fatigue resistance, and corrosion resistance at service temperatures. The mechanical behavior of these materials strongly depends on their underlying crystal microstructure. Since fatigue life is a key parameter for industrial applications, my current research focuses on developing multiscale models that can accurately predict fatigue behavior while remaining computationally efficient for large-scale simulations.
  </p>

  <div class="research-subsection">
    <h3>Short crack propagation in polycrystalline materials</h3>

    <p>
As the first step in this process, I am focusing on modeling the short crack propagation in the microstructure of these materials. I am developing novel microstructure-informed short crack propagation models that ensure numerical stability and robustness. My approach utilizes the phase field method coupled with a crystal plasticity framework to simulate microstructure-dependent short crack growth under both monotonic and cyclic loading. The model captures the complex coupling between elasticity, plasticity, and damage. It also incorporates key physical phenomena such as tension-compression asymmetry in damage evolution during cyclic loading, dislocation motion and resistance due to entanglements, grain size effects, the Bauschinger effect, and material degradation due to multiple loading cycles. We are currently validating the model using experimental data from rolled AA7050 alloys, provided by our collaborators. In the next phase, the model will be coupled with multi-time scaling methods to simulate fatigue behavior over thousands of loading cycles.  
    </p>
  </div>
  
</section>

<section class="research-section">
  <h2>Doctoral Thesis</h2>

  <figure class="figure-block">
      <img src="/Photos/PhDOverview.png" alt="Overview of my phd research" class="research-image">
      <figcaption class="figure-caption">Figure references: Russ et al. (2020), Mang et al. (2021), asme.org, sciencetime.com, qsdirectory.com, Qi et al. (2022)</figcaption>
  </figure>

  <p>
    This research was conducted in the <a href="https://cm2.stanford.edu/" target="_blank">Computational Mechanics of Materials (CM2) Laboratory</a> headed by Dr. Christian Linder at Stanford University and was funded by the National Science Foundation, Department of Energy’s National Nuclear Security Administration, and Stanford's Leavell, Blume and School of Engineering Graduate Fellowships.
  </p>

  <p> 
      Rubber-like materials find widespread applications in areas like stretchable electronics, self-actuators, implantable sensors, and many engineering fields. This is primarily due to their desirable attributes such as high stretchability, high toughness, low modulus, and low cost. Consequently, accurately modeling their fracture behavior becomes crucial for comprehending and designing them resiliently against failures. However, the challenges posed by their multiscalenature and incompressible behavior make precise modeling a formidable task. Notably, certain materials like natural rubber stand out for their superior qualities compared to theircounterparts. Numerous efforts have been made to elucidate the underlying mechanisms behind its exceptional properties, with strain-induced crystallization (SIC) emerging as a key phenomenonbelieved to enhance fracture resistance. Moreover, SIC is also observed in polymer melts duringindustrial processing, where it can be harnessed to tailor the properties of finished products. Motivated by these insights, my research focused on developing multiscale models to predict the fracture behavior of these materials.
  </p>

  <div class="research-subsection">
    <h3>Fracture Initiation in strain-crystallizing rubbers</h3>

    <figure class="figure-block">
      <img src="/Photos/PhDFracInit.png" alt="Fracture Initiation in strain-crystallizing rubbers" class="research-image">
      <figcaption class="figure-caption">Figure references: Chen et al. (2019), Gherib et al. (2010)</figcaption>
  </figure>

    <p> 
      As the first step, I proposed the <strong>first multiscale model</strong> in literature capable of capturing the effects of strain-induced crystallization on the fracture initiation of rubber-like materials. The multiscale formulation captures major properties like chain entropic behavior, stretching of the microscale monomer bonds, crystallinity evolution in the chains, anisotropic polymer network behavior, and incompressibility of rubbers. The fracture initiation criterion is based on the microscale internal energy and accounts for the rupture of molecular bonds and distortion of crystallites. The model also captured the frustration in crystallinity due to biaxial loading, and is the <strong>first multiscale model</strong> in literature to capture this effect.
    </p>

    <div class="reference-list">
      <h4>References</h4>
      <ul>
      <li><a href="https://www.sciencedirect.com/science/article/pii/S0022509621002593" target="_blank"> Arunachala, Rastak & Linder, J. Mech. Phys. Solids (2021) </a></li>
      </ul>
    </div>
    </div>

    <div class="research-subsection">
    <h3>Fracture propagation in non-crystallizing rubbers</h3>

    <figure class="figure-block">
      <img src="/Photos/PhDFracProp.png" alt="Fracture propagation in non-crystallizing rubbers" class="research-image">
      <figcaption class="figure-caption">Figure references: Russ et al. (2020), Mang et al. (2021)</figcaption>
  </figure>

    <p>
      As the next step, I proposed novel multiscale models to capture fracture propagation in non-crystallizing rubbers. This formulation utilizes the phase field approach to model the crack propagation, while also capturing major properties like chain entropic behavior, stretching of the microscale monomer bonds, anisotropic polymer network behavior, and incompressibility of rubbers. It is assumed that the rupturing of the microscale molecular bonds mainly drives damage. The models have been validated using various experimental results in order to demonstrate their predictive capability, accuracy, and numerical robustness.
    </p>

    <div class="reference-list">
      <h4>References</h4>
      <ul>
      <li><a href="https://www.sciencedirect.com/science/article/pii/S0045782523001056" target="_blank">Arunachala et al., Comput. Methods Appl. Mech. Eng. (2023)</a></li>
      <li><a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/nme.7488" target="_blank">Arunachala et al., Int. J. Numer. Methods Eng. (2024)</a></li>
      </ul>
    </div>
    </div>

    <div class="research-subsection">
    <h3>Fracture propagation in strain-crystallizing rubbers</h3>

    <figure class="figure-block">
      <img src="/Photos/PhDFracPropSic.png" alt="Fracture propagation in strain-crystallizing rubbers" class="research-image">
      <figcaption class="figure-caption">Figure references: Gherib et al. (2010)</figcaption>
  </figure>

    <p>
      Finally, I combined the previous two studies to propose the <strong>first multiscale model</strong> in literature to capture the effects of strain-induced crystallization on fracture propagation in rubbers. This formulation also utilizes the phase field approach to model the crack propagation, and damage is assumed to be driven by the molecular bond rupture and distortion of crystallites.
    </p> 
    </div>
</section>

<section class="research-section">
  <h2>Key Collaboration Projects</h2>

  <figure class="figure-block">
      <img src="/Photos/CollabProjects.png" alt="Key Collaboration Projects" class="research-image">
      <figcaption class="figure-caption">Figure references: Wang et al. (2021), Qiu et al. (2023)</figcaption>
  </figure>

  <div class="research-subsection">
    <h3>Experiments to study elastomer fracture</h3>

    <p>
      To gain practical insight into fracture behavior in elastomers, we designed and conducted a set of experiments under the guidance of Dr. Renee Zhao at Stanford University. To study the behavior of PDMS rubber, we first fabricated dogbone specimens to obtain the uniaxial tensile response in order to calibrate material parameters. Subsequently, we fabricated square films with a central hole and asymmetric notches, and utilized the observed crack propagation paths and load-displacement behavior to validate our model.
    </p>

    <div class="reference-list">
      <h4>References</h4>
      <ul>
      <li><a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/nme.7488" target="_blank">Arunachala et al., Int. J. Numer. Methods Eng. (2024)</a></li>
      </ul>
    </div>
  </div>

  <div class="research-subsection">
    <h3>Strain analysis of stretchable transistors</h3>

    <p>
      For strain analysis of a stretchable transistor array comprising substrate and encapsulant layers, we developed a framework to accurately predict the local strain within the encapsulant layer based on globally applied strains across various design configurations. This study is crucial for optimally designing stretchable transistor arrays used in wearable electronics applications.
    </p>

    <div class="reference-list">
      <h4>References</h4>
      <ul>
      <li><a href="https://www.nature.com/articles/s41928-020-00525-1" target="_blank">Wang,..., Arunachala et al., Nat. Electron. (2021)</a></li>
      <li><a href="https://www.nature.com/articles/s41467-023-44099-w" target="_blank">Wu,..., Arunachala et al., Nat. Commun. (2023)</a></li>
      </ul>
    </div>
  </div>

  <div class="research-subsection">
    <h3>Physics-informed neural networks for shape sensing applications</h3>

    <p>
      We utilized physics-informed neural networks (PINNs) to solve inverse problems, where deformations are reconstructed from strain sensor readings. In this approach, the underlying physics, represented by governing equations and boundary conditions, is incorporated into the neural network framework, while also minimizing discrepancies with the sensor data. This study holds significant promise for shape-sensing applications such as structural health monitoring and shape reconstruction in medical and fashion industries.
    </p>

    <div class="reference-list">
      <h4>References</h4>
      <ul>
      <li><a href="https://ascelibrary.org/doi/abs/10.1061/JENMDT.EMENG-6901" target="_blank">Qiu, Arunachala & Linder, J. Elast. (2023)</a></li>
      </ul>
    </div>
  </div>

  <div class="research-subsection">
    <h3>Fracture behavior of mock high explosive materials (PSAAP III)</h3>

    <p>
      As part of this multi-university collaborative project, I investigated the application of strong discontinuity theories, such as the Embedded Finite Element Method (EFEM), to capture the macroscale fracture behavior of mock high explosive materials. Additionally, I explored the integration of contact formulations and spatially varying material parameters with gradient-enhanced damage models to replicate experimentally observed behaviors. This study is highly relevant for understanding the fracture response of complex inhomogeneous materials. 
    </p>

    <div class="reference-list">
      <h4>References</h4>
      <ul>
      <li><a href="https://micromorph.gitlab.io/overview/" target="_blank">Predictive Science Academic Alliance Program (PSAAP) III, CU Boulder</a></li>
      </ul>
    </div>
  </div>

  <div class="research-subsection">
    <h3>Ductile fracture modeling of steel and cohesive frictional materials</h3>

    <p>
      Micromechanics-driven ductile fracture formulations have been developed using Boltzmann and micropolar continua, incorporating phase-field and gradient-enhanced damage models. These studies have significant relevance in applications such as borehole breakout and the construction industry.
    </p>

    <div class="reference-list">
      <h4>References</h4>
      <ul>
      <li><a href="https://www.sciencedirect.com/science/article/pii/S0045782522004972" target="_blank">Abrari Vajari, Neuner, Arunachala et al., Comput. Methods Appl. Mech. Eng. (2022)</a></li>
      <li><a href="https://www.sciencedirect.com/science/article/pii/S0266352X22004013" target="_blank">Neuner, Abrari Vajari, Arunachala & Linder, Comput. Geotech. (2023)</a></li>
      <li><a href="https://www.sciencedirect.com/science/article/pii/S0045782523005285" target="_blank">Abrari Vajari, Neuner, Arunachala & Linder, Comput. Methods Appl. Mech. Eng. (2023)</a></li>
      </ul>
    </div>
  </div>

</section>