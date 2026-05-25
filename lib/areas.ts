export type AreaContent = {
  slug: string;
  name: string;
  blurb: string;
  intro: string;
  propertyTypes: string[];
  localNotes: string[];
  faq: { question: string; answer: string }[];
};

export const areaContent: AreaContent[] = [
  {
    slug: 'sutton-coldfield',
    name: 'Sutton Coldfield',
    blurb: 'Older detached and Edwardian semis, high spray-foam install rate',
    intro:
      'Sutton Coldfield has a large stock of older detached houses, Edwardian semis, and extended family homes where loft work often matters during sale or remortgage.',
    propertyTypes: [
      'Detached houses around Four Oaks and Little Aston where larger roof areas can make removal more involved.',
      'Edwardian and inter-war semis where ventilation and roof-felt condition need careful checking.',
      'Bungalows and chalet-style homes where low roof pitch or limited loft access can affect survey detail.',
    ],
    localNotes: [
      'Four Oaks and Mere Green properties often have larger loft footprints than central Birmingham terraces.',
      'Older roof structures may need more careful post-removal inspection before sale paperwork is complete.',
      'Commuter-belt buyers can be mortgage-sensitive, so documentation after removal is especially important.',
    ],
    faq: [
      {
        question: 'Do Sutton Coldfield homes need different checks?',
        answer:
          'The process is the same, but larger detached homes and older roof structures often need more detailed access and timber checks.',
      },
      {
        question: 'Can you help if a Sutton Coldfield sale is already underway?',
        answer:
          'Yes. Have the surveyor or lender comments ready so the quote discussion covers the paperwork being requested.',
      },
    ],
  },
  {
    slug: 'solihull',
    name: 'Solihull',
    blurb: 'Premium properties under tight mortgage scrutiny',
    intro:
      'Solihull homeowners often face spray foam questions during higher-value sales, remortgages, and survey negotiations where buyer confidence matters.',
    propertyTypes: [
      'Detached family homes where roof size and documentation can both affect the quote.',
      'Extended semis where previous insulation work may be mixed with older roof materials.',
      'Premium properties where buyers and lenders often ask for clearer evidence before exchange.',
    ],
    localNotes: [
      'Homes around Knowle, Shirley, and central Solihull can vary widely in roof size and access.',
      'Higher-value transactions often make clear before-and-after documentation more important.',
      'If a buyer survey has already flagged spray foam, the wording in that report should guide the next step.',
    ],
    faq: [
      {
        question: 'Is documentation more important for Solihull sales?',
        answer:
          'It can be. Higher-value sales often involve more detailed buyer questions, so photographs and written completion notes are useful.',
      },
      {
        question: 'Can a quote be based on photos only?',
        answer:
          'Photos help with triage, but a property-specific quote normally needs a loft survey and foam-type assessment.',
      },
    ],
  },
  {
    slug: 'edgbaston',
    name: 'Edgbaston',
    blurb: 'Victorian and Edwardian stock, period-property concerns',
    intro:
      'Edgbaston has period homes, larger conversions, and older roof structures where ventilation, timber condition, and survey documentation need careful attention.',
    propertyTypes: [
      'Victorian and Edwardian houses with older timbers and roof voids.',
      'Converted or extended homes where loft access may be split across sections.',
      'Larger properties where removal can take longer because of roof complexity.',
    ],
    localNotes: [
      'Period roofs can hide historic damp or ventilation issues behind foam.',
      'Surveyors may be especially cautious where spray foam prevents inspection of older timbers.',
      'Properties near the Calthorpe Estate and surrounding roads often need careful sale documentation.',
    ],
    faq: [
      {
        question: 'Are period homes harder to assess?',
        answer:
          'They can be. Older timbers, altered roofs, and historic repairs make a careful survey more important.',
      },
      {
        question: 'Does removal damage old rafters?',
        answer:
          'Careful manual removal is designed to reduce avoidable damage, but the survey should flag fragile areas before work starts.',
      },
    ],
  },
  {
    slug: 'harborne',
    name: 'Harborne',
    blurb: 'Mixed period and post-war, ventilation-sensitive roof types',
    intro:
      'Harborne has a mix of Victorian terraces, inter-war semis, and post-war homes where spray foam can become a sale or ventilation concern.',
    propertyTypes: [
      'Terraced homes where loft access may be tight and disposal routes need planning.',
      'Inter-war semis with roof structures that depend on clear airflow.',
      'Extended family homes where different roof sections may have different insulation histories.',
    ],
    localNotes: [
      'Harborne homes can have compact loft access, especially in terraced and older semis.',
      'Ventilation checks matter where foam has been applied directly to felt or rafters.',
      'If a buyer survey mentions spray foam, get the exact wording before requesting a quote.',
    ],
    faq: [
      {
        question: 'Can tight loft access affect removal?',
        answer:
          'Yes. Access affects preparation, worker movement, bagging, and how quickly waste can be removed.',
      },
      {
        question: 'Should I remove foam before listing a Harborne home?',
        answer:
          'If you know a mortgage-backed buyer is likely, it is worth discussing the roof before listing or accepting an offer.',
      },
    ],
  },
  {
    slug: 'erdington',
    name: 'Erdington',
    blurb: 'Mixed housing, resale-conscious owners',
    intro:
      'Erdington homeowners often need practical, cost-conscious guidance when spray foam appears on survey reports or slows down a sale.',
    propertyTypes: [
      'Post-war semis and terraces where access and roof condition vary street by street.',
      'Rental and resale properties where a buyer or lender query can delay completion.',
      'Older homes where foam may sit alongside previous insulation or roof repairs.',
    ],
    localNotes: [
      'In resale-driven cases, speed and clear documentation often matter as much as the removal itself.',
      'Mixed housing stock means quotes should not be guessed without loft details.',
      'If affordability is a concern, ask what is essential now and what can be separated as repair work.',
    ],
    faq: [
      {
        question: 'Can removal be staged to manage cost?',
        answer:
          'Sometimes removal, inspection, and repair work can be separated, but lender or buyer requirements may affect what has to happen first.',
      },
      {
        question: 'What details should I send first?',
        answer:
          'Send the postcode, property type, loft photos if you have them, and any surveyor or lender wording.',
      },
    ],
  },
  {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    blurb: 'Larger detached homes across the wider region',
    intro:
      'Wolverhampton and the wider Black Country include varied roof types, from compact terraces to larger detached homes where foam type and access shape the quote.',
    propertyTypes: [
      'Detached and semi-detached houses with larger roof voids across suburban areas.',
      'Terraced homes where access, parking, and waste movement need planning.',
      'Older properties where roof-felt and timber condition should be checked once foam is exposed.',
    ],
    localNotes: [
      'The wider service radius means photos and postcode detail help triage the enquiry quickly.',
      'Properties with larger lofts can require more time for removal and documentation.',
      'Mortgage and sale cases should start with the lender or survey wording, not just the foam photos.',
    ],
    faq: [
      {
        question: 'Do you cover Wolverhampton as well as Birmingham?',
        answer:
          'Yes. Wolverhampton is within the wider West Midlands service area for spray foam enquiries.',
      },
      {
        question: 'Does distance change the quote?',
        answer:
          'The main quote drivers are still property size, foam type, access, timber condition, and documentation needs.',
      },
    ],
  },
  {
    slug: 'dudley',
    name: 'Dudley',
    blurb: 'Black Country housing stock with similar problems',
    intro:
      'Dudley homeowners can face the same spray foam mortgage and roof-inspection issues as Birmingham, especially when a buyer or lender asks for evidence.',
    propertyTypes: [
      'Black Country terraces and semis where loft access can be tight.',
      'Detached and extended homes where different roof sections may need separate inspection.',
      'Older properties where ventilation and roof-felt condition need checking after foam is removed.',
    ],
    localNotes: [
      'Dudley enquiries often start after a survey report flags the loft.',
      'If the property has had previous roof repairs, mention this before a survey is arranged.',
      'Clear completion notes can help solicitors, brokers, and buyers understand what has changed.',
    ],
    faq: [
      {
        question: 'Can you help with Dudley survey issues?',
        answer:
          'Yes. Keep the survey wording available so the discussion covers the specific concern raised.',
      },
      {
        question: 'Is foam removal always urgent?',
        answer:
          'Urgency depends on sale timing, remortgage pressure, roof condition, and whether moisture or timber damage is suspected.',
      },
    ],
  },
];

export function getAreaBySlug(slug: string) {
  return areaContent.find((area) => area.slug === slug);
}
