export type GuideContent = {
  slug: string;
  title: string;
  description: string;
  tldr: string;
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const guideContent: GuideContent[] = [
  {
    slug: 'spray-foam-mortgage-problems',
    title: 'Spray Foam Mortgage Problems',
    description:
      'Why spray foam insulation can create mortgage, remortgage, and valuation problems for UK homeowners.',
    tldr:
      'Spray foam can create mortgage problems when a lender or surveyor cannot inspect the roof structure or is concerned about moisture, ventilation, or installation quality. The next step is to understand what the lender has asked for and whether removal documentation would answer it.',
    sections: [
      {
        heading: 'Why lenders worry about spray foam',
        body: [
          'Mortgage lenders are cautious because spray foam can hide the roof timbers and felt that surveyors need to inspect. If the surveyor cannot see enough of the roof structure, the lender may treat the property as higher risk.',
          'Closed-cell foam can be especially sensitive because it is hard, dense, and can restrict inspection. Open-cell foam can also create concerns if it traps moisture or was installed without proper ventilation planning.',
        ],
      },
      {
        heading: 'What to do after a mortgage refusal',
        body: [
          'Ask for the exact lender or surveyor wording. A vague statement that spray foam is present is less useful than a written requirement for a specialist report, removal quote, or post-removal evidence.',
          'Do not guess what the lender will accept. Some want removal before lending. Others may consider a specialist report. The safest first step is to match the response to the lender request.',
        ],
      },
      {
        heading: 'What evidence helps',
        body: [
          'Useful evidence can include loft photographs, foam-type identification, a written quote, before and after images, waste notes, and completion documentation. The evidence needed depends on whether the case is a sale, purchase, remortgage, or equity release.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will every lender refuse a spray foam property?',
        answer:
          'No. Policies vary, but many lenders treat spray foam as a valuation or inspection risk. Always work from the specific lender response.',
      },
      {
        question: 'Should I remove foam before applying for a mortgage?',
        answer:
          'If you already know the foam is likely to be flagged, get advice before applying. Removal may help, but the required documentation matters.',
      },
    ],
    related: ['rics-guidance-spray-foam', 'selling-house-with-spray-foam', 'spray-foam-removal-cost'],
  },
  {
    slug: 'open-cell-vs-closed-cell-spray-foam',
    title: 'Open-Cell vs Closed-Cell Spray Foam',
    description:
      'Plain-English differences between open-cell and closed-cell spray foam, and why the distinction matters for removal.',
    tldr:
      'Open-cell foam is softer and more porous. Closed-cell foam is harder, denser, and usually more difficult to remove. Both can cause mortgage or roof-inspection concerns if they block timber inspection or affect ventilation.',
    sections: [
      {
        heading: 'How open-cell foam behaves',
        body: [
          'Open-cell foam is usually softer to touch and easier to compress. It is often lighter and more vapour-open than closed-cell foam, but it can still create roof concerns when installed directly to the underside of roof felt or tiles.',
        ],
      },
      {
        heading: 'How closed-cell foam behaves',
        body: [
          'Closed-cell foam is rigid and dense. It can bond strongly to rafters and felt, making careful removal slower. Its rigidity is one reason lenders and surveyors can be cautious when it is installed in a pitched roof.',
        ],
      },
      {
        heading: 'Why foam type changes removal',
        body: [
          'Foam type affects removal speed, dust, bonding strength, waste volume, and the likelihood of finding hidden timber or felt issues once the foam is removed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I identify foam type myself?',
        answer:
          'You may be able to make an initial guess by touch and appearance, but a survey is better before relying on it for a quote or lender paperwork.',
      },
      {
        question: 'Is one type always safe?',
        answer:
          'No. The installation quality, roof design, ventilation, and documentation matter as much as the foam label.',
      },
    ],
    related: ['how-long-spray-foam-removal-takes', 'signs-spray-foam-needs-removal'],
  },
  {
    slug: 'pas-2035-spray-foam-explained',
    title: 'PAS 2035 and Spray Foam Explained',
    description:
      'What PAS 2035 means in retrofit work and why homeowners should ask careful questions about spray foam insulation.',
    tldr:
      'PAS 2035 is a retrofit standard that encourages whole-house assessment and moisture-aware decisions. It is relevant because roof insulation changes can affect ventilation, condensation risk, and future property evidence.',
    sections: [
      {
        heading: 'Why PAS 2035 comes up',
        body: [
          'PAS 2035 is often mentioned in retrofit because it pushes projects to consider the building as a system. Roof insulation is not only about heat loss; it also affects moisture movement, ventilation, and future inspection.',
        ],
      },
      {
        heading: 'What homeowners should ask',
        body: [
          'Ask whether the original installation considered ventilation, condensation, roof condition, and future mortgage evidence. If those records do not exist, a current survey may need to rebuild the picture.',
        ],
      },
      {
        heading: 'How this affects removal',
        body: [
          'Removal should not be treated as only scraping foam away. Once foam is removed, the roof may need ventilation reinstatement, timber inspection, or replacement insulation that makes sense for the whole property.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does PAS 2035 certify a removal company?',
        answer:
          'Not by itself. Avoid assuming a company is certified unless they provide specific proof for the work and people involved.',
      },
      {
        question: 'Do I need PAS 2035 paperwork?',
        answer:
          'It depends on the original scheme, the current issue, and whether a lender, surveyor, or grant body has asked for it.',
      },
    ],
    related: ['rics-guidance-spray-foam', 'spray-foam-mortgage-problems'],
  },
  {
    slug: 'rics-guidance-spray-foam',
    title: 'RICS Guidance on Spray Foam',
    description:
      'What RICS-style survey concerns mean for homeowners with spray foam insulation in the loft.',
    tldr:
      'RICS guidance matters because surveyors need to understand roof condition, moisture risk, and whether spray foam prevents inspection. If a report flags spray foam, read the wording carefully before deciding what evidence or removal is needed.',
    sections: [
      {
        heading: 'Why surveyors flag spray foam',
        body: [
          'Surveyors are asked to comment on property condition and valuation risk. Spray foam can make that harder if it covers timbers, roof felt, fixings, or ventilation paths.',
        ],
      },
      {
        heading: 'What the report wording means',
        body: [
          'A report may simply note that foam is present, or it may recommend further investigation, specialist advice, or lender review. The recommended next step depends on that wording.',
        ],
      },
      {
        heading: 'How to prepare for follow-up',
        body: [
          'Keep the survey report, any installation paperwork, foam warranty, photographs, and lender comments together. These documents help shape the survey and quote conversation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a RICS survey always require removal?',
        answer:
          'No. A survey can trigger further investigation without automatically requiring removal. Lender policy may be the deciding factor.',
      },
      {
        question: 'Can removal improve survey confidence?',
        answer:
          'It can if it exposes the roof for inspection and produces clear completion evidence, but acceptance depends on the buyer, lender, and surveyor.',
      },
    ],
    related: ['spray-foam-mortgage-problems', 'signs-spray-foam-needs-removal'],
  },
  {
    slug: 'selling-house-with-spray-foam',
    title: 'Selling a House with Spray Foam',
    description:
      'What to expect when selling a UK property with spray foam insulation in the loft.',
    tldr:
      'A house with spray foam can still sell, but mortgage-backed buyers may face lender questions. The safest route is to understand the foam, gather documents, and decide whether a survey, quote, or removal is needed before the sale stalls.',
    sections: [
      {
        heading: 'How spray foam affects buyers',
        body: [
          'Buyers may worry about roof damage, mortgage refusal, and future resale. Even if the roof appears fine, the unknowns can lead to renegotiation or delay.',
        ],
      },
      {
        heading: 'What to gather before listing',
        body: [
          'Find installation paperwork, warranties, photos, foam type, installer details, and any previous survey notes. If documents are missing, say so early rather than letting the issue surface late.',
        ],
      },
      {
        heading: 'When removal makes sense',
        body: [
          'Removal may make sense when a sale depends on mortgage lending, survey access, or buyer confidence. It may be less urgent for a cash buyer who accepts the risk.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I tell the estate agent?',
        answer:
          'Yes. The issue is likely to appear during survey, so early disclosure helps avoid wasted time.',
      },
      {
        question: 'Can a cash buyer still proceed?',
        answer:
          'Often yes, but they may ask for a discount or specialist inspection before exchange.',
      },
    ],
    related: ['spray-foam-mortgage-problems', 'spray-foam-removal-cost'],
  },
  {
    slug: 'spray-foam-health-risks',
    title: 'Spray Foam Health Risks',
    description:
      'A cautious guide to health, dust, odour, and removal risks around cured spray foam insulation.',
    tldr:
      'For most homeowners, the main spray foam concerns are property and mortgage issues rather than day-to-day health. Removal can create dust and debris, so it should be planned with isolation, PPE, and waste handling.',
    sections: [
      {
        heading: 'Living with cured spray foam',
        body: [
          'Once properly cured, spray foam is usually discussed more as a building-risk issue than a daily exposure issue. Odours, poor installation, or damaged materials should still be assessed rather than ignored.',
        ],
      },
      {
        heading: 'Removal dust and debris',
        body: [
          'Removal is different from living with installed foam. Cutting and scraping can create dust, fragments, and residue. The loft should be isolated and workers should use appropriate protection.',
        ],
      },
      {
        heading: 'When to get specialist advice',
        body: [
          'If you notice strong odours, respiratory symptoms linked to loft access, damp, mould, or visible material breakdown, get property-specific advice before disturbing the foam.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is cured spray foam toxic?',
        answer:
          'That depends on product, installation, curing, and condition. Avoid broad claims and get specific advice if there are odours or symptoms.',
      },
      {
        question: 'Is removal dusty?',
        answer:
          'Yes. That is why isolation, PPE, and controlled waste handling matter.',
      },
    ],
    related: ['diy-spray-foam-removal-warning', 'open-cell-vs-closed-cell-spray-foam'],
  },
  {
    slug: 'signs-spray-foam-needs-removal',
    title: 'Signs Spray Foam Needs Removal',
    description:
      'Warning signs that spray foam insulation may need investigation, removal, or roof repair.',
    tldr:
      'Warning signs include mortgage refusal, survey comments, trapped moisture, visible timber staining, sagging foam, blocked ventilation, roof leaks, or missing installation paperwork. A survey can separate urgent problems from manageable ones.',
    sections: [
      {
        heading: 'Paperwork warning signs',
        body: [
          'A lender refusal, buyer concern, surveyor note, missing warranty, or lack of installation records can all make spray foam a practical problem even before visible damage appears.',
        ],
      },
      {
        heading: 'Roof warning signs',
        body: [
          'Look for damp smells, staining, sagging foam, visible timber darkening, condensation, roof leaks, or areas where foam has pulled away. Do not disturb suspect foam without advice.',
        ],
      },
      {
        heading: 'When to act quickly',
        body: [
          'Act quickly if a sale or mortgage deadline is live, if water ingress is visible, or if a surveyor has recommended further investigation before lending.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does staining always mean rot?',
        answer:
          'No. Staining is a signal to inspect, not proof of structural failure.',
      },
      {
        question: 'Can missing paperwork be enough reason to remove foam?',
        answer:
          'Sometimes. If a lender or buyer needs evidence you cannot provide, removal may become the practical route.',
      },
    ],
    related: ['spray-foam-mortgage-problems', 'how-long-spray-foam-removal-takes'],
  },
  {
    slug: 'how-long-spray-foam-removal-takes',
    title: 'How Long Spray Foam Removal Takes',
    description:
      'What affects the timeline for spray foam insulation removal in UK lofts.',
    tldr:
      'Spray foam removal timing depends on loft size, foam type, bonding strength, access, disposal, and whether timber repairs are found. A simple job may be short, while larger or more complex roofs need more time.',
    sections: [
      {
        heading: 'Why timing varies',
        body: [
          'No two lofts are identical. A compact loft with soft foam and clear access is very different from a large roof with dense foam, low headroom, or fragile felt.',
        ],
      },
      {
        heading: 'What slows removal down',
        body: [
          'Closed-cell foam, tight access, heavy bonding, hidden wiring, stored items, timber damage, and waste movement can all slow the job. Documentation requirements can also add time.',
        ],
      },
      {
        heading: 'Sale and mortgage deadlines',
        body: [
          'If a lender or buyer deadline is driving the work, say so immediately. The quote conversation should include the paperwork and timing needed after removal, not only the labour time.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can removal be done in a day?',
        answer:
          'Some smaller jobs may be quick, but timing should not be promised without a survey.',
      },
      {
        question: 'Do I need to move out?',
        answer:
          'Often no, but isolation and access arrangements should be confirmed before work starts.',
      },
    ],
    related: ['how-spray-foam-removal-works', 'spray-foam-removal-cost'],
  },
  {
    slug: 'diy-spray-foam-removal-warning',
    title: 'DIY Spray Foam Removal Warning',
    description:
      'Why DIY spray foam insulation removal can create roof damage, dust exposure, and documentation problems.',
    tldr:
      'DIY spray foam removal can damage rafters or felt, create dust, leave waste-disposal problems, and fail to produce the paperwork a lender or buyer needs. Get advice before cutting into foam.',
    sections: [
      {
        heading: 'Why DIY removal is risky',
        body: [
          'Spray foam is bonded to the roof structure. Cutting too aggressively can damage felt, rafters, cables, or fixings. Working overhead in a dusty loft also creates avoidable exposure and access risks.',
        ],
      },
      {
        heading: 'Waste and cleanup problems',
        body: [
          'Removed foam is bulky and messy. Household waste routes may not accept it, and poor cleanup can leave residue throughout the loft or living space.',
        ],
      },
      {
        heading: 'Documentation problems',
        body: [
          'Even if you remove some foam yourself, a lender, buyer, or surveyor may still ask for professional evidence of what was removed and what condition the roof is in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I remove a small test patch?',
        answer:
          'Do not disturb foam without understanding what is behind it and what evidence you may need later.',
      },
      {
        question: 'Are chemical removers a shortcut?',
        answer:
          'They can create residue and material damage. Treat shortcut claims cautiously.',
      },
    ],
    related: ['spray-foam-health-risks', 'how-spray-foam-removal-works'],
  },
  {
    slug: 'spray-foam-grant-removal-options',
    title: 'Spray Foam Grant Removal Options',
    description:
      'Whether grants, installer claims, insurance, or local schemes can help with spray foam removal.',
    tldr:
      'Spray foam removal is not usually covered by mainstream retrofit grants. Possible routes include installer complaints, insurance, narrow local schemes, or sale-related negotiation, but each depends on evidence and eligibility.',
    sections: [
      {
        heading: 'Why grants are limited',
        body: [
          'Most retrofit schemes are designed to install energy-efficiency measures, not pay to remove problematic installations. That makes spray foam removal funding difficult for many homeowners.',
        ],
      },
      {
        heading: 'Possible routes to explore',
        body: [
          'Check the original installer paperwork, warranty, insurance-backed guarantee, finance agreement, and any complaint route. If a council scheme exists, eligibility is usually narrow and locally defined.',
        ],
      },
      {
        heading: 'When negotiation matters',
        body: [
          'In a sale, buyer and seller may negotiate around removal cost, timing, or retention. Get legal and estate-agent advice before agreeing terms.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does ECO4 pay for removal?',
        answer:
          'Do not assume it does. Eligibility is narrow and scheme rules change, so check current guidance before relying on grant funding.',
      },
      {
        question: 'Can I claim against the installer?',
        answer:
          'Possibly, depending on paperwork, workmanship, warranties, finance, and limitation periods. Get advice before spending money on a dispute.',
      },
    ],
    related: ['spray-foam-removal-cost', 'selling-house-with-spray-foam'],
  },
];

export function getGuideBySlug(slug: string) {
  return guideContent.find((guide) => guide.slug === slug);
}
