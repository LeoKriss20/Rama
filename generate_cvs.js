import PDFDocument from 'pdfkit';
import fs from 'fs';

const cvData = {
  es: {
    filename: 'CV_Rachel_Martinez_Giralt_ES.pdf',
    name: 'RACHEL MARTINEZ GIRALT',
    subtitle: 'LICENCIADA EN CIENCIAS DE LA INFORMACIÓN',
    phone: 'Teléfono: +55 (48) 99918-6785',
    email: 'Correo electrónico: rachel.martinez.cu@gmail.com',
    location: 'Ubicación: Tubarão, Santa Catarina, Brasil',
    footer: 'RACHEL MARTINEZ GIRALT | CURRÍCULUM PROFESIONAL',
    
    // Page 1
    p1Title: 'PERFIL PROFESIONAL',
    profileParagraphs: [
      'Profesional de las Ciencias de la Información y de la Comunicación, apasionada por la creación de contenido, copywriting y gestión estratégica de la información y de la comunicación digital. Especializada en transformar ideas en publicaciones atractivas utilizando herramientas como Canva y CapCut, además de redactar textos comerciales, publicitarios y científicos y elaborar informes de resultados que apoyan la toma de decisiones.',
      'Poseo habilidades de organización, planificación, comunicación asertiva, aprendizaje rápido y resolución de problemas. Cuento con experiencia en gestión de redes sociales, coordinación operativa, organización de agendas y análisis de información. Me destaco por mi creatividad, adaptabilidad, responsabilidad y capacidad de trabajar en equipo, contribuyendo al logro de los objetivos de cada organización.'
    ],
    
    compTitle: 'COMPETENCIAS',
    competencies: [
      'Copywriting y redacción publicitaria, comercial y científica',
      'Elaboración de informes de resultados e informes estadísticos',
      'Gestión de redes sociales y comunidades digitales',
      'Creación de contenido visual y audiovisual con Canva y CapCut',
      'Planificación estratégica de contenido digital y calendarios editoriales',
      'Organización de agendas y coordinación de equipos con Notion',
      'Gestión, análisis, organización y recuperación de la información',
      'Comunicación asertiva, trabajo en equipo y resolución de problemas',
      'Docencia y alfabetización mediática e informacional',
      'Organización administrativa y coordinación operativa',
      'Idiomas: inglés — nivel B1'
    ],
    
    expTitle: 'EXPERIENCIA PROFESIONAL',
    expP1: [
      {
        role: 'Gestora Operativa',
        place: 'Cartel Studio | 2026',
        bullets: [
          'Organización y coordinación de las agendas de diseñadores y editores a través de Notion.',
          'Planificación, distribución y seguimiento de las tareas del equipo creativo.',
          'Organización de flujos de trabajo para facilitar el cumplimiento de plazos y objetivos.',
          'Apoyo a la coordinación operativa y a la comunicación entre los integrantes del equipo.',
          'Seguimiento de actividades y organización de la información de los proyectos.'
        ]
      },
      {
        role: 'Vendedora Comercial',
        place: 'Servi Aqua Cuba | 2026',
        bullets: [
          'Venta y promoción de productos de cristalería.',
          'Atención y orientación a los clientes, identificando necesidades y ofreciendo productos adecuados.',
          'Presentación de las características y de los beneficios de los productos.',
          'Apoyo a las actividades comerciales y promocionales para brindar una experiencia de compra satisfactoria.'
        ]
      },
      {
        role: 'Docente Universitaria',
        place: 'Facultad de Comunicación | 2024–2026',
        bullets: [
          'Docencia universitaria en las asignaturas de Pensamiento Informacional y Gestión de la Información.',
          'Participación en proyectos de transformación digital y alfabetización mediática e informacional.',
          'Realización de diagnósticos, auditorías de información y estudios sobre comportamiento informacional.',
          'Desarrollo de programas de alfabetización para optimizar procesos organizacionales.',
          'Elaboración de materiales didácticos y contenidos académicos, promoviendo competencias informacionales y pensamiento crítico.'
        ]
      }
    ],
    
    // Page 2
    expP2Title: 'EXPERIENCIA PROFESIONAL | CONTINUACIÓN',
    expP2: [
      {
        role: 'Asistente Ejecutiva y Community Manager',
        place: 'PDL La Moneda Cubana | 2025–2026',
        bullets: [
          'Creación de contenido visual y audiovisual para plataformas digitales.',
          'Gestión de comunidades digitales e interacción con el público.',
          'Elaboración de informes estadísticos y análisis del rendimiento de las publicaciones.',
          'Creación y planificación de calendarios estratégicos de publicación.',
          'Gestión de la información, apoyo administrativo, organización de agendas y manejo de documentación sensible.',
          'Apoyo a la coordinación de actividades y a la comunicación organizacional.'
        ]
      },
      {
        role: 'Social Media Manager',
        place: 'Agencia de Viajes Cubanacán | 2025–2026',
        bullets: [
          'Creación de contenido visual y audiovisual para redes sociales.',
          'Gestión de comunidades digitales y comunicación con el público.',
          'Elaboración de informes estadísticos para evaluar el rendimiento de las publicaciones.',
          'Planificación de estrategias de contenido alineadas con los objetivos empresariales.',
          'Redacción de textos promocionales y adaptación de mensajes a diferentes plataformas digitales.',
          'Apoyo a la comunicación y a la promoción de servicios turísticos mediante contenido digital.'
        ]
      },
      {
        role: 'Analista de Información',
        place: 'Centro de Información para la Prensa | 2021–2023',
        bullets: [
          'Clasificación, organización y representación documental mediante metadados, incluyendo título, fecha, autor, resumen y palabras clave.',
          'Gestión y análisis de grandes volúmenes de información.',
          'Organización de recursos documentales para facilitar su recuperación y consulta.',
          'Apoyo a los procesos de acceso, búsqueda y recuperación eficiente de la información.',
          'Descripción y organización de documentos para mejorar su localización y utilización.'
        ]
      }
    ],
    
    eduTitle: 'FORMACIÓN ACADÉMICA',
    education: [
      { degree: 'Licenciatura en Ciencias de la Información', inst: 'Facultad de Comunicación | 2024' },
      { degree: 'Posgrado en Inteligencia Artificial y Pedagogía', inst: 'Universidad de La Habana | 2025' },
      { degree: 'Posgrado en Comunicación Estratégica de la Ciencia', inst: 'Facultad de Comunicación | 2024' },
      { degree: 'Posgrado en Gestión de la Información y Comunicación Social', inst: 'Escuela RAMAL del ICS | 2025' },
      { degree: 'Posgrado en Comunicación Audiovisual', inst: 'Escuela RAMAL del ICS | 2025' }
    ],
    
    interestTitle: 'ÁREAS DE INTERÉS',
    interests: 'Comunicación digital • Marketing de contenido • Gestión de la información • Redes sociales • Copywriting • Coordinación operativa'
  },
  
  en: {
    filename: 'CV_Rachel_Martinez_Giralt_EN.pdf',
    name: 'RACHEL MARTINEZ GIRALT',
    subtitle: 'BACHELOR OF INFORMATION SCIENCE',
    phone: 'Phone: +55 (48) 99918-6785',
    email: 'Email: rachel.martinez.cu@gmail.com',
    location: 'Location: Tubarão, Santa Catarina, Brazil',
    footer: 'RACHEL MARTINEZ GIRALT | PROFESSIONAL RÉSUMÉ',
    
    // Page 1
    p1Title: 'PROFESSIONAL PROFILE',
    profileParagraphs: [
      'Information and Communication Science professional, passionate about content creation, copywriting, and strategic management of information and digital communication. Specialized in transforming ideas into engaging publications using tools such as Canva and CapCut, as well as writing commercial, advertising, and scientific texts and producing performance reports that support decision-making.',
      'Possess strong skills in organization, planning, assertive communication, quick learning, and problem-solving. Experienced in social media management, operational coordination, schedule management, and information analysis. Known for creativity, adaptability, responsibility, and teamwork capabilities, contributing to achieving organizational goals.'
    ],
    
    compTitle: 'CORE COMPETENCIES',
    competencies: [
      'Copywriting and advertising, commercial, and scientific writing',
      'Preparation of performance reports and statistical analysis',
      'Social media and digital community management',
      'Visual and audiovisual content creation with Canva and CapCut',
      'Strategic digital content planning and editorial calendars',
      'Schedule organization and team coordination using Notion',
      'Information management, analysis, organization, and retrieval',
      'Assertive communication, teamwork, and problem-solving',
      'Teaching and media and information literacy',
      'Administrative organization and operational coordination',
      'Languages: English — B1 level'
    ],
    
    expTitle: 'PROFESSIONAL EXPERIENCE',
    expP1: [
      {
        role: 'Operations Manager',
        place: 'Cartel Studio | 2026',
        bullets: [
          'Organization and coordination of designers\' and editors\' schedules through Notion.',
          'Planning, allocation, and monitoring of creative team tasks.',
          'Workflow organization to facilitate meeting deadlines and objectives.',
          'Support for operational coordination and communication among team members.',
          'Activity tracking and project information organization.'
        ]
      },
      {
        role: 'Commercial Sales Representative',
        place: 'Servi Aqua Cuba | 2026',
        bullets: [
          'Sale and promotion of glassware products.',
          'Customer service and guidance, identifying needs and offering suitable products.',
          'Presentation of product features and benefits.',
          'Support for commercial and promotional activities to ensure a satisfying shopping experience.'
        ]
      },
      {
        role: 'University Lecturer',
        place: 'Faculty of Communication | 2024–2026',
        bullets: [
          'University teaching in Information Thinking and Information Management courses.',
          'Participation in digital transformation and media and information literacy projects.',
          'Conducting assessments, information audits, and studies on information behavior.',
          'Development of literacy programs to optimize organizational processes.',
          'Preparation of didactic materials and academic content, promoting information skills and critical thinking.'
        ]
      }
    ],
    
    // Page 2
    expP2Title: 'PROFESSIONAL EXPERIENCE | CONTINUED',
    expP2: [
      {
        role: 'Executive Assistant & Community Manager',
        place: 'PDL La Moneda Cubana | 2025–2026',
        bullets: [
          'Visual and audiovisual content creation for digital platforms.',
          'Digital community management and audience engagement.',
          'Preparation of statistical reports and publication performance analysis.',
          'Creation and planning of strategic publishing calendars.',
          'Information management, administrative support, schedule organization, and handling sensitive documentation.',
          'Support for activity coordination and organizational communication.'
        ]
      },
      {
        role: 'Social Media Manager',
        place: 'Cubanacán Travel Agency | 2025–2026',
        bullets: [
          'Visual and audiovisual content creation for social media.',
          'Digital community management and audience communication.',
          'Preparation of statistical reports to evaluate publication performance.',
          'Planning content strategies aligned with business goals.',
          'Promotional copywriting and adapting messages across different digital platforms.',
          'Support for communication and promotion of tourism services through digital content.'
        ]
      },
      {
        role: 'Information Analyst',
        place: 'Press Information Center | 2021–2023',
        bullets: [
          'Document classification, organization, and representation using metadata, including title, date, author, abstract, and keywords.',
          'Management and analysis of large volumes of information.',
          'Organization of documentary resources to facilitate efficient retrieval and consultation.',
          'Support for efficient information access, search, and retrieval processes.',
          'Document description and organization to improve localization and usability.'
        ]
      }
    ],
    
    eduTitle: 'ACADEMIC BACKGROUND',
    education: [
      { degree: 'Bachelor’s Degree in Information Science', inst: 'Faculty of Communication | 2024' },
      { degree: 'Postgraduate Degree in Artificial Intelligence & Pedagogy', inst: 'University of Havana | 2025' },
      { degree: 'Postgraduate Degree in Strategic Communication of Science', inst: 'Faculty of Communication | 2024' },
      { degree: 'Postgraduate Degree in Information Management & Social Communication', inst: 'RAMAL School of ICS | 2025' },
      { degree: 'Postgraduate Degree in Audiovisual Communication', inst: 'RAMAL School of ICS | 2025' }
    ],
    
    interestTitle: 'AREAS OF INTEREST',
    interests: 'Digital communication • Content marketing • Information management • Social media • Copywriting • Operations coordination'
  }
};

function renderCV(data) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 35, bottom: 20, left: 45, right: 45 },
    autoFirstPage: true
  });

  const writeStream = fs.createWriteStream(data.filename);
  doc.pipe(writeStream);

  const primaryColor = '#0b2149';
  const accentBlue = '#1f4edb';
  const textDark = '#1a2233';
  const textMuted = '#4a5b78';
  const tableBg1 = '#f1f6fc';
  const tableBg2 = '#ffffff';

  // --- PAGE 1 ---
  // Header Navy Box
  doc.rect(45, 35, 505, 95).fill(primaryColor);

  // Header Text
  doc.fillColor('#ffffff').fontSize(16).font('Helvetica-Bold')
     .text(data.name, 60, 48, { lineBreak: false });

  doc.fillColor('#8eb5ff').fontSize(9).font('Helvetica-Bold')
     .text(data.subtitle, 60, 70, { lineBreak: false });

  doc.fillColor('#ffffff').fontSize(8).font('Helvetica')
     .text(data.phone, 60, 87, { lineBreak: false })
     .text(data.email, 60, 99, { lineBreak: false })
     .text(data.location, 60, 111, { lineBreak: false });

  // Photo on right of header
  if (fs.existsSync('rachel_photo.jpg')) {
    doc.save();
    doc.roundedRect(465, 45, 75, 75, 4).clip();
    doc.image('rachel_photo.jpg', 465, 45, { width: 75, height: 75, fit: [75, 75] });
    doc.restore();
    // Fine border
    doc.roundedRect(465, 45, 75, 75, 4).lineWidth(1).strokeColor('#8eb5ff').stroke();
  }

  let y = 140;

  function drawSectionTitle(title) {
    doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold')
       .text(title, 45, y, { lineBreak: false });
    y += 14;
    doc.strokeColor('#d0dceb').lineWidth(0.6)
       .moveTo(45, y - 2).lineTo(550, y - 2).stroke();
    y += 4;
  }

  // Profile Section
  drawSectionTitle(data.p1Title);
  doc.fillColor(textDark).fontSize(7.5).font('Helvetica');
  for (const p of data.profileParagraphs) {
    doc.text(p, 45, y, { width: 505, align: 'justify', lineGap: 1.5 });
    y = doc.y + 4;
  }
  y += 2;

  // Competencies Section
  drawSectionTitle(data.compTitle);
  doc.fontSize(7.5).font('Helvetica');
  for (const comp of data.competencies) {
    doc.fillColor(accentBlue).text('•', 50, y, { lineBreak: false });
    doc.fillColor(textDark).text(comp, 60, y, { width: 490 });
    y = doc.y + 1.5;
  }
  y += 2;

  // Professional Experience Section (P1)
  drawSectionTitle(data.expTitle);
  for (const exp of data.expP1) {
    doc.fillColor(primaryColor).fontSize(8.5).font('Helvetica-Bold').text(exp.role, 45, y, { lineBreak: false });
    y += 11;
    doc.fillColor(textMuted).fontSize(7.5).font('Helvetica-Oblique').text(exp.place, 45, y, { lineBreak: false });
    y += 10;

    doc.fontSize(7.5).font('Helvetica');
    for (const b of exp.bullets) {
      doc.fillColor(accentBlue).text('•', 50, y, { lineBreak: false });
      doc.fillColor(textDark).text(b, 60, y, { width: 490, lineGap: 1 });
      y = doc.y + 1.5;
    }
    y += 3;
  }

  // Page 1 Footer at absolute bottom
  doc.strokeColor('#d0dceb').lineWidth(0.5).moveTo(45, 805).lineTo(550, 805).stroke();
  doc.fillColor(textMuted).fontSize(7).font('Helvetica')
     .text(data.footer, 45, 810, { lineBreak: false });
  doc.text('1', 545, 810, { lineBreak: false });

  // --- PAGE 2 ---
  doc.addPage();
  y = 40;

  // Experience Part 2
  drawSectionTitle(data.expP2Title);
  for (const exp of data.expP2) {
    doc.fillColor(primaryColor).fontSize(8.5).font('Helvetica-Bold').text(exp.role, 45, y, { lineBreak: false });
    y += 11;
    doc.fillColor(textMuted).fontSize(7.5).font('Helvetica-Oblique').text(exp.place, 45, y, { lineBreak: false });
    y += 10;

    doc.fontSize(7.5).font('Helvetica');
    for (const b of exp.bullets) {
      doc.fillColor(accentBlue).text('•', 50, y, { lineBreak: false });
      doc.fillColor(textDark).text(b, 60, y, { width: 490, lineGap: 1 });
      y = doc.y + 1.5;
    }
    y += 3;
  }
  y += 6;

  // Education Section
  drawSectionTitle(data.eduTitle);
  const rowHeight = 22;
  const colWidthDegree = 320;
  const colWidthInst = 185;
  const tableX = 45;

  data.education.forEach((edu, idx) => {
    const rowY = y;
    const bg = idx % 2 === 0 ? tableBg1 : tableBg2;
    doc.rect(tableX, rowY, 505, rowHeight).fill(bg);
    doc.rect(tableX, rowY, 505, rowHeight).lineWidth(0.5).strokeColor('#d0dceb').stroke();

    // Degree on left
    doc.fillColor(primaryColor).fontSize(7.5).font('Helvetica-Bold')
       .text(edu.degree, tableX + 8, rowY + 6, { width: colWidthDegree - 10, lineBreak: false });

    // Institution on right
    doc.fillColor(textMuted).fontSize(7.5).font('Helvetica-Oblique')
       .text(edu.inst, tableX + colWidthDegree, rowY + 6, { width: colWidthInst - 10, align: 'right', lineBreak: false });

    y += rowHeight;
  });
  y += 14;

  // Areas of Interest
  drawSectionTitle(data.interestTitle);
  doc.fillColor(textDark).fontSize(7.5).font('Helvetica')
     .text(data.interests, 45, y, { width: 505, align: 'left' });

  // Page 2 Footer
  doc.strokeColor('#d0dceb').lineWidth(0.5).moveTo(45, 805).lineTo(550, 805).stroke();
  doc.fillColor(textMuted).fontSize(7).font('Helvetica')
     .text(data.footer, 45, 810, { lineBreak: false });
  doc.text('2', 545, 810, { lineBreak: false });

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      console.log('Generated:', data.filename);
      resolve();
    });
    writeStream.on('error', reject);
  });
}

async function run() {
  await renderCV(cvData.es);
  await renderCV(cvData.en);
  console.log('All CVs generated successfully.');
}

run();
