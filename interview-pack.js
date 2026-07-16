/**
 * Digital Interview Pack – Buyer I Master
 * Accessible to recruiter / GM / manager during interviews.
 */

const BUYER_I_PACK = {
    key: 'buyer_i_master',
    title: 'Buyer I – Master Interview Pack',
    maxScore: 85,
    ratingLabels: {
        1: 'Fails to meet requirements',
        2: 'Fails to meet some key requirements',
        3: 'Meets requirements satisfactorily',
        4: 'Meets all and exceeds some requirements',
        5: 'Exceeds all requirements'
    },
    sections: [
        {
            id: 'opening',
            title: 'Opening Questions',
            maxScore: 10,
            questions: [
                {
                    id: 'A1',
                    title: 'Question A1',
                    prompt: 'What do you know about Artifex already, and what has motivated you to interview for this position?',
                    promptInternal: 'For internal candidates: What is your understanding of the current situation at Artifex, in reference to changes that have occurred over the past 12 months, and current/future programmes?',
                    indicators: [
                        'Has taken steps to find out about the organisation and role',
                        'Can provide a good explanation for why they are interested in this role',
                        'Has a convincing explanation of why they are wanting to move on',
                        'Has a convincing explanation of existing role / situation'
                    ],
                    maxScore: 5
                },
                {
                    id: 'A2',
                    title: 'Question A2',
                    prompt: 'What is your understanding of the role you have applied for, and what do you believe the most important aspects would be?',
                    indicators: [
                        'Makes mention of the duties or missions and results in the provided job spec',
                        'Can provide a good explanation for why they are a good fit for the role',
                        'Understands potential challenges that may arise'
                    ],
                    maxScore: 5
                }
            ]
        },
        {
            id: 'presentation',
            title: 'Presentation',
            maxScore: 20,
            intro: [
                'Part 1: If you received a supplier claim, what steps would you take to manage it?',
                'Part 2: Given the current macro environment, what types of claims might Buyers at Artifex be receiving?'
            ],
            note: 'Score each subsection out of 5 (total 20).',
            questions: [
                {
                    id: 'PRES1',
                    title: '1. Supplier Claim Management',
                    prompt: 'A logical flow including some/all of: validate claim, gather evidence, engage supplier, root cause / liability, resolution / commercial negotiation, close out & prevention.',
                    indicators: [
                        'Validate claim',
                        'Gather evidence',
                        'Engage supplier',
                        'Root cause / liability',
                        'Resolution / commercial negotiation',
                        'Close out & prevention'
                    ],
                    maxScore: 5
                },
                {
                    id: 'PRES2',
                    title: '2. Market Awareness',
                    prompt: 'Raw material volatility, energy costs, supply chain disruption, labour shortages, FX — and how these translate into price increase claims, capacity/delivery issues, quality issues due to cost pressure.',
                    indicators: [
                        'Raw material / energy / FX / labour awareness',
                        'Links macro factors to claim types',
                        'Capacity / delivery / quality implications'
                    ],
                    maxScore: 5
                },
                {
                    id: 'PRES3',
                    title: '3. Application to Artifex Context',
                    prompt: 'Automotive supply chain pressures, material markets relevant to AX (e.g. plastics, rolled goods), Tier 1 / supplier relationships, cost-down expectations.',
                    indicators: [
                        'Automotive supply chain pressures',
                        'Relevant material markets',
                        'Tier 1 / supplier relationships',
                        'Cost-down expectations'
                    ],
                    maxScore: 5
                },
                {
                    id: 'PRES4',
                    title: '4. Communication and presentation skills',
                    prompt: 'Clarity and structure, confidence, slides as prompts (not read verbatim), logical flow.',
                    indicators: [
                        'Clarity and structure',
                        'Confidence',
                        'Minimal slide text / explained verbally',
                        'Logical flow'
                    ],
                    maxScore: 5
                }
            ]
        },
        {
            id: 'presentation_followup',
            title: 'Presentation Follow-up',
            maxScore: 10,
            questions: [
                {
                    id: 'P1',
                    title: 'Question P1',
                    prompt: 'Follow-up question 1 (write your own below)',
                    customPrompt: true,
                    indicators: ['Interviewer to populate positive indicators'],
                    maxScore: 5
                },
                {
                    id: 'P2',
                    title: 'Question P2',
                    prompt: 'Follow-up question 2 (write your own below)',
                    customPrompt: true,
                    indicators: ['Interviewer to populate positive indicators'],
                    maxScore: 5
                }
            ]
        },
        {
            id: 'competency',
            title: 'Competency Questions',
            maxScore: 20,
            questions: [
                {
                    id: 'C1',
                    title: 'Question C1',
                    prompt: 'Tell me about a time you worked on a task that involved multiple stakeholders or departments, and how your inputs contributed to the wider objective?',
                    indicators: [
                        'Clearly identifies different stakeholders (e.g. Engineering, Finance, Quality, suppliers)',
                        'Understands how their work impacted others / wider objective',
                        'Communicates proactively to align inputs and avoid delays',
                        'Works collaboratively and supports overall team outcomes'
                    ],
                    maxScore: 5
                },
                {
                    id: 'C2',
                    title: 'Question C2',
                    prompt: 'Describe a time you managed a task with multiple inputs or dependencies.',
                    followUps: [
                        'Did you use a tracker or plan to stay organised?',
                        'How did you make sure everything was delivered on time?'
                    ],
                    indicators: [
                        'Uses a structured approach (tracker, plan, prioritisation)',
                        'Tracks progress and identifies missing information',
                        'Manages competing priorities and meets deadlines',
                        'Owns accurate and on-time completion'
                    ],
                    maxScore: 5
                },
                {
                    id: 'C3',
                    title: 'Question C3',
                    prompt: 'Give an example of when you were missing information needed to complete a task, and what you did to resolve it.',
                    indicators: [
                        'Identifies gaps and checks available information before acting',
                        'Takes initiative to source missing inputs',
                        'Uses a logical step-by-step approach rather than guesswork',
                        'Escalates appropriately while maintaining progress'
                    ],
                    maxScore: 5
                },
                {
                    id: 'C4',
                    title: 'Question C4',
                    prompt: 'Tell me about a time you had to input and maintain data to support a task. How did you do this, and what challenges did you face?',
                    followUps: [
                        'What tools did you use (e.g. Excel, trackers)?',
                        'How did you organise or analyse the data?',
                        'Did you present this to anyone?'
                    ],
                    indicators: [
                        'Experience with structured data (Excel, trackers, reports)',
                        'Attention to detail / validation for accuracy',
                        'Organising or analysing data (sort, filter, formulas, pivots)',
                        'Data used or presented to support decisions'
                    ],
                    maxScore: 5
                }
            ]
        },
        {
            id: 'values',
            title: 'Value Questions',
            maxScore: 25,
            questions: [
                {
                    id: 'V1',
                    title: 'Question V1 – Unity',
                    prompt: 'Tell me about a time when you worked with others who had different levels of technical understanding. How did you ensure everyone stayed aligned and empowered to make the right decision?',
                    indicators: [
                        'Simplifies complex concepts for mixed audiences',
                        'Adapts communication style to support understanding',
                        'Uses expertise to enable — not dominate — decision making',
                        'Builds alignment, collaboration, and confidence across teams'
                    ],
                    maxScore: 5
                },
                {
                    id: 'V2',
                    title: 'Question V2 – Integrity',
                    prompt: 'Describe a situation where you had to deliver difficult or sensitive information. How did you communicate it, and how did you maintain trust with the people involved?',
                    indicators: [
                        'Communicates honestly, calmly, and without avoidance',
                        'Shows empathy and respect throughout',
                        'Explains rationale clearly, with transparency',
                        'Maintains credibility and strengthens trust'
                    ],
                    maxScore: 5
                },
                {
                    id: 'V3',
                    title: 'Question V3 – Responsibility',
                    prompt: 'Tell me about a time you took ownership of a challenging situation or problem. What actions did you take, and how did you ensure a constructive outcome for everyone involved?',
                    indicators: [
                        'Takes accountability without blame-shifting',
                        'Addresses challenges openly and constructively',
                        'Engages stakeholders to drive shared resolution',
                        'Delivers corrective actions and sees them through'
                    ],
                    maxScore: 5
                },
                {
                    id: 'V4',
                    title: 'Question V4 – Pioneering',
                    prompt: 'Walk me through an example where you used a structured approach to solve a complex problem. How did your insights or creativity help improve the final outcome?',
                    followUps: [
                        'What would you do differently if you approached this problem again?'
                    ],
                    indicators: [
                        'Uses structured problem-solving (8D, Ishikawa, etc.)',
                        'Applies data, evidence, and insights effectively',
                        'Adapts approach based on learnings',
                        'Drives improvement, innovation, or better-than-baseline outcomes'
                    ],
                    maxScore: 5
                },
                {
                    id: 'V5',
                    title: 'Question V5 – Excellence',
                    prompt: 'Can you share an example of work you delivered that you felt proud of, and how you ensured it met a high standard? And if applicable, a time you recognised someone else’s strong performance?',
                    indicators: [
                        'Openly shares and recognises team or personal success',
                        'Acknowledges contributions of others with sincerity',
                        'Promotes and models collective achievement',
                        'Demonstrates commitment to high standards and quality'
                    ],
                    maxScore: 5
                }
            ]
        }
    ],
    skills: [
        {
            id: 's1',
            skill: 'Degree or equivalent experience in Supply Chain, Business, Engineering or a related discipline (or working towards)',
            evidencedIn: 'A2',
            detail: 'Demonstrates foundational knowledge relevant to procurement, supply chain, and commercial concepts.'
        },
        {
            id: 's2',
            skill: 'Some exposure to procurement, supply chain or commercial environments would be beneficial',
            evidencedIn: 'Presentation',
            detail: 'Shows awareness of procurement processes such as supplier management, claim handling, and commercial interactions.'
        },
        {
            id: 's3',
            skill: 'Basic understanding of commercial principles, cost drivers or supplier relationships',
            evidencedIn: 'Presentation, V3',
            detail: 'Demonstrates understanding of cost, risk, and supplier dynamics within a programme and broader market context.'
        },
        {
            id: 's4',
            skill: 'Strong organisational skills with a structured and methodical approach to tasks',
            evidencedIn: 'C2, C4',
            detail: 'Required to manage multiple inputs, trackers, and deadlines across stakeholders.'
        },
        {
            id: 's5',
            skill: 'Good attention to detail and ability to work with data accurately',
            evidencedIn: 'C4',
            detail: 'Ensures accuracy in procurement data, reporting, and decision-making inputs.'
        },
        {
            id: 's6',
            skill: 'Willingness to learn and develop within a procurement or supply chain environment',
            evidencedIn: 'A1, V4',
            detail: 'Demonstrates curiosity, openness to feedback, and development mindset.'
        },
        {
            id: 's7',
            skill: 'Ability to communicate clearly and work effectively within a team',
            evidencedIn: 'C1, V1, V2',
            detail: 'Supports cross-functional working with Engineering, Quality, Finance and suppliers.'
        },
        {
            id: 's8',
            skill: 'Positive, proactive attitude with an interest in continuous improvement and problem solving',
            evidencedIn: 'C3, V4, V5',
            detail: 'Reflects ability to resolve issues, improve processes, and contribute positively.'
        }
    ]
};

class InterviewPackManager {
    constructor() {
        this.supabase = null;
        this.packs = {
            buyer_i_master: BUYER_I_PACK
        };
        this._autosaveTimer = null;
        this._current = null;
    }

    init(supabaseInstance) {
        this.supabase = supabaseInstance;
    }

    getPack(packKey = 'buyer_i_master') {
        return this.packs[packKey] || BUYER_I_PACK;
    }

    emptyData(candidate) {
        return {
            header: {
                candidateName: candidate?.name || '',
                interviewDate: new Date().toISOString().slice(0, 10),
                assessor1: '',
                assessor2: '',
                candidateSourceType: '',
                location: '',
                roleType: ''
            },
            answers: {},
            skills: {},
            candidateQuestions: '',
            hrComments: '',
            hrName: '',
            hrSigned: false,
            hrDate: ''
        };
    }

    calculateScores(pack, data) {
        const answers = data?.answers || {};
        const sectionScores = {};
        let total = 0;
        let max = 0;

        (pack.sections || []).forEach(section => {
            let sectionTotal = 0;
            let sectionMax = 0;
            (section.questions || []).forEach(q => {
                const rating = Number(answers[q.id]?.rating);
                sectionMax += q.maxScore || 5;
                if (!Number.isNaN(rating) && rating >= 1 && rating <= 5) {
                    sectionTotal += rating;
                }
            });
            sectionScores[section.id] = { score: sectionTotal, max: sectionMax };
            total += sectionTotal;
            max += sectionMax;
        });

        const percentage = max > 0 ? Math.round((total / max) * 1000) / 10 : 0;
        return { total, max, percentage, sectionScores };
    }

    async getPackForCandidate(candidateId, packKey = 'buyer_i_master', round = 'first') {
        if (!this.supabase) throw new Error('Supabase client not initialized');

        const { data, error } = await this.supabase
            .from('candidate_interview_packs')
            .select('*')
            .eq('candidate_id', candidateId)
            .eq('pack_key', packKey)
            .eq('round', round)
            .maybeSingle();

        if (error) throw error;
        return data;
    }

    async savePack(candidateId, packKey, round, payload) {
        if (!this.supabase) throw new Error('Supabase client not initialized');

        const user = window.authManager?.getUserInfo?.() || {};
        const authUser = (await this.supabase.auth.getUser())?.data?.user;
        const pack = this.getPack(packKey);
        const scores = this.calculateScores(pack, payload.data || {});

        const row = {
            candidate_id: candidateId,
            pack_key: packKey,
            round,
            data: payload.data || {},
            total_score: scores.total,
            max_score: scores.max,
            percentage: scores.percentage,
            recommendation: payload.recommendation || null,
            updated_by: authUser?.id || null,
            updated_by_email: user.email || authUser?.email || null,
            updated_at: new Date().toISOString()
        };

        const { data, error } = await this.supabase
            .from('candidate_interview_packs')
            .upsert(row, { onConflict: 'candidate_id,pack_key,round' })
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    scheduleAutosave(saveFn) {
        if (this._autosaveTimer) clearTimeout(this._autosaveTimer);
        this._autosaveTimer = setTimeout(() => {
            saveFn().catch(err => console.warn('Interview pack autosave failed:', err));
        }, 1200);
    }
}

window.InterviewPackManager = InterviewPackManager;
window.interviewPackManager = new InterviewPackManager();
window.BUYER_I_PACK = BUYER_I_PACK;

/** Slovak translations for Buyer I pack content (EN source → SK) */
const INTERVIEW_PACK_SK = {
    'Buyer I – Master Interview Pack': 'Buyer I – Master Interview Pack',
    'Opening Questions': 'Úvodné otázky',
    'Presentation': 'Prezentácia',
    'Presentation Follow-up': 'Follow-up k prezentácii',
    'Competency Questions': 'Kompetenčné otázky',
    'Value Questions': 'Otázky k hodnotám',
    'Question A1': 'Otázka A1',
    'Question A2': 'Otázka A2',
    'Question P1': 'Otázka P1',
    'Question P2': 'Otázka P2',
    'Question C1': 'Otázka C1',
    'Question C2': 'Otázka C2',
    'Question C3': 'Otázka C3',
    'Question C4': 'Otázka C4',
    'Question V1 – Unity': 'Otázka V1 – Unity (Jednota)',
    'Question V2 – Integrity': 'Otázka V2 – Integrity (Integrita)',
    'Question V3 – Responsibility': 'Otázka V3 – Responsibility (Zodpovednosť)',
    'Question V4 – Pioneering': 'Otázka V4 – Pioneering (Priekopníctvo)',
    'Question V5 – Excellence': 'Otázka V5 – Excellence (Excelentnosť)',
    'What do you know about Artifex already, and what has motivated you to interview for this position?':
        'Čo už viete o Artifexe a čo vás motivovalo uchádzať sa o túto pozíciu?',
    'For internal candidates: What is your understanding of the current situation at Artifex, in reference to changes that have occurred over the past 12 months, and current/future programmes?':
        'Pre interných kandidátov: Aké je vaše pochopenie aktuálnej situácie v Artifexe s ohľadom na zmeny za posledných 12 mesiacov a aktuálne/budúce programy?',
    'Has taken steps to find out about the organisation and role':
        'Zistil si informácie o organizácii a pozícii',
    'Can provide a good explanation for why they are interested in this role':
        'Vie dobre vysvetliť, prečo ho pozícia zaujíma',
    'Has a convincing explanation of why they are wanting to move on':
        'Má presvedčivé vysvetlenie, prečo chce zmeniť prácu',
    'Has a convincing explanation of existing role / situation':
        'Má presvedčivé vysvetlenie súčasnej role / situácie',
    'What is your understanding of the role you have applied for, and what do you believe the most important aspects would be?':
        'Ako rozumiete pozícii, o ktorú ste sa uchádzali, a čo považujete za jej najdôležitejšie aspekty?',
    'Makes mention of the duties or missions and results in the provided job spec':
        'Spomína povinnosti, misie a výsledky zo špecifikácie pozície',
    'Can provide a good explanation for why they are a good fit for the role':
        'Vie dobre vysvetliť, prečo je vhodný kandidát na pozíciu',
    'Understands potential challenges that may arise':
        'Rozumie potenciálnym výzvam, ktoré môžu nastať',
    'Part 1: If you received a supplier claim, what steps would you take to manage it?':
        'Časť 1: Ak by ste dostali reklamáciu / claim od dodávateľa, aké kroky by ste podnikli?',
    'Part 2: Given the current macro environment, what types of claims might Buyers at Artifex be receiving?':
        'Časť 2: Vzhľadom na aktuálne makroprostredie, aké typy claimov by mohli Buyer-i v Artifexe dostávať?',
    'Score each subsection out of 5 (total 20).':
        'Každú podsekciu hodnotíte maximálne 5 bodmi (spolu 20).',
    '1. Supplier Claim Management': '1. Riadenie claimov dodávateľa',
    'A logical flow including some/all of: validate claim, gather evidence, engage supplier, root cause / liability, resolution / commercial negotiation, close out & prevention.':
        'Logický postup zahŕňajúci niektoré/všetky kroky: overenie claimu, zber dôkazov, komunikácia s dodávateľom, root cause / zodpovednosť, riešenie / obchodné vyjednávanie, uzavretie a prevencia.',
    'Validate claim': 'Overenie claimu',
    'Gather evidence': 'Zber dôkazov',
    'Engage supplier': 'Zapojenie dodávateľa',
    'Root cause / liability': 'Root cause / zodpovednosť',
    'Resolution / commercial negotiation': 'Riešenie / obchodné vyjednávanie',
    'Close out & prevention': 'Uzavretie a prevencia',
    '2. Market Awareness': '2. Trhové povedomie',
    'Raw material volatility, energy costs, supply chain disruption, labour shortages, FX — and how these translate into price increase claims, capacity/delivery issues, quality issues due to cost pressure.':
        'Volatilita surovín, náklady na energie, narušenie dodávateľského reťazca, nedostatok pracovnej sily, FX — a ako sa to premieta do claimov na zvýšenie cien, kapacity/dodávky a kvality pod tlakom nákladov.',
    'Raw material / energy / FX / labour awareness':
        'Povedomie o surovinách / energiách / FX / pracovnej sile',
    'Links macro factors to claim types':
        'Spája makro faktory s typmi claimov',
    'Capacity / delivery / quality implications':
        'Dôsledky na kapacitu / dodávky / kvalitu',
    '3. Application to Artifex Context': '3. Aplikácia v kontexte Artifex',
    'Automotive supply chain pressures, material markets relevant to AX (e.g. plastics, rolled goods), Tier 1 / supplier relationships, cost-down expectations.':
        'Tlak v automobilovom supply chain, trhy materiálov relevantné pre AX (napr. plasty, rolled goods), vzťahy Tier 1 / dodávatelia, očakávania cost-down.',
    'Automotive supply chain pressures': 'Tlak v automotive supply chain',
    'Relevant material markets': 'Relevantné trhy materiálov',
    'Tier 1 / supplier relationships': 'Vzťahy Tier 1 / dodávatelia',
    'Cost-down expectations': 'Očakávania cost-down',
    '4. Communication and presentation skills': '4. Komunikačné a prezentačné zručnosti',
    'Clarity and structure, confidence, slides as prompts (not read verbatim), logical flow.':
        'Jasnosť a štruktúra, sebavedomie, slajdy ako podpora (nie čítanie textu), logický tok.',
    'Clarity and structure': 'Jasnosť a štruktúra',
    'Confidence': 'Sebavedomie',
    'Minimal slide text / explained verbally': 'Minimálny text na slajdoch / vysvetlené ústne',
    'Logical flow': 'Logický tok',
    'Follow-up question 1 (write your own below)': 'Follow-up otázka 1 (napíšte vlastnú nižšie)',
    'Follow-up question 2 (write your own below)': 'Follow-up otázka 2 (napíšte vlastnú nižšie)',
    'Interviewer to populate positive indicators': 'Hodnotiteľ doplní pozitívne indikátory',
    'Tell me about a time you worked on a task that involved multiple stakeholders or departments, and how your inputs contributed to the wider objective?':
        'Povedzte o situácii, keď ste pracovali na úlohe s viacerými stakeholdermi alebo oddeleniami a ako váš vstup prispel k širšiemu cieľu.',
    'Clearly identifies different stakeholders (e.g. Engineering, Finance, Quality, suppliers)':
        'Jasne identifikuje rôznych stakeholderov (napr. Engineering, Finance, Quality, dodávatelia)',
    'Understands how their work impacted others / wider objective':
        'Rozumie, ako jeho práca ovplyvnila ostatných / širší cieľ',
    'Communicates proactively to align inputs and avoid delays':
        'Komunikuje proaktívne, aby zosúladil vstupy a predíšiel oneskoreniam',
    'Works collaboratively and supports overall team outcomes':
        'Pracuje kolaboratívne a podporuje celkový výsledok tímu',
    'Describe a time you managed a task with multiple inputs or dependencies.':
        'Opíšte situáciu, keď ste riadili úlohu s viacerými vstupmi alebo závislosťami.',
    'Did you use a tracker or plan to stay organised?':
        'Použili ste tracker alebo plán na udržanie prehľadu?',
    'How did you make sure everything was delivered on time?':
        'Ako ste zabezpečili, že všetko bolo dodané načas?',
    'Uses a structured approach (tracker, plan, prioritisation)':
        'Používa štruktúrovaný prístup (tracker, plán, priorizácia)',
    'Tracks progress and identifies missing information':
        'Sleduje progres a identifikuje chýbajúce informácie',
    'Manages competing priorities and meets deadlines':
        'Zvláda konkurenčné priority a dodržiava termíny',
    'Owns accurate and on-time completion':
        'Preberá zodpovednosť za presné a včasné dokončenie',
    'Give an example of when you were missing information needed to complete a task, and what you did to resolve it.':
        'Uveďte príklad, keď vám chýbali informácie potrebné na dokončenie úlohy, a čo ste urobili.',
    'Identifies gaps and checks available information before acting':
        'Identifikuje medzery a pred konaním overí dostupné informácie',
    'Takes initiative to source missing inputs':
        'Preberá iniciatívu pri získaní chýbajúcich vstupov',
    'Uses a logical step-by-step approach rather than guesswork':
        'Používa logický postup krok za krokom, nie tipovanie',
    'Escalates appropriately while maintaining progress':
        'Eskaluje primerane a zároveň udržiava progres',
    'Tell me about a time you had to input and maintain data to support a task. How did you do this, and what challenges did you face?':
        'Povedzte o situácii, keď ste museli zadávať a udržiavať dáta na podporu úlohy. Ako ste to robili a aké výzvy ste mali?',
    'What tools did you use (e.g. Excel, trackers)?':
        'Aké nástroje ste použili (napr. Excel, trackery)?',
    'How did you organise or analyse the data?':
        'Ako ste dáta organizovali alebo analyzovali?',
    'Did you present this to anyone?':
        'Prezentovali ste to niekomu?',
    'Experience with structured data (Excel, trackers, reports)':
        'Skúsenosť so štruktúrovanými dátami (Excel, trackery, reporty)',
    'Attention to detail / validation for accuracy':
        'Pozornosť k detailu / validácia presnosti',
    'Organising or analysing data (sort, filter, formulas, pivots)':
        'Organizácia alebo analýza dát (sort, filter, vzorce, pivoty)',
    'Data used or presented to support decisions':
        'Dáta použité alebo prezentované na podporu rozhodnutí',
    'Tell me about a time when you worked with others who had different levels of technical understanding. How did you ensure everyone stayed aligned and empowered to make the right decision?':
        'Povedzte o situácii, keď ste pracovali s ľuďmi s rôznou úrovňou technického pochopenia. Ako ste zabezpečili zosúladenie a schopnosť správne rozhodovať?',
    'Simplifies complex concepts for mixed audiences':
        'Zjednodušuje komplexné koncepty pre zmiešané publikum',
    'Adapts communication style to support understanding':
        'Prispôsobuje komunikačný štýl na podporu pochopenia',
    'Uses expertise to enable — not dominate — decision making':
        'Používa expertízu na podporu rozhodovania, nie na jeho dominanciu',
    'Builds alignment, collaboration, and confidence across teams':
        'Buduje zosúladenie, spoluprácu a dôveru naprieč tímami',
    'Describe a situation where you had to deliver difficult or sensitive information. How did you communicate it, and how did you maintain trust with the people involved?':
        'Opíšte situáciu, keď ste museli odovzdať ťažké alebo citlivé informácie. Ako ste komunikovali a ako ste udržali dôveru?',
    'Communicates honestly, calmly, and without avoidance':
        'Komunikuje úprimne, pokojne a bez vyhýbania',
    'Shows empathy and respect throughout':
        'Prejavuje empatiu a rešpekt počas celej komunikácie',
    'Explains rationale clearly, with transparency':
        'Jasne a transparentne vysvetľuje dôvody',
    'Maintains credibility and strengthens trust':
        'Udržiava kredibilitu a posilňuje dôveru',
    'Tell me about a time you took ownership of a challenging situation or problem. What actions did you take, and how did you ensure a constructive outcome for everyone involved?':
        'Povedzte o situácii, keď ste prevzali vlastníctvo náročného problému. Aké kroky ste podnikli a ako ste zabezpečili konštruktívny výsledok?',
    'Takes accountability without blame-shifting':
        'Preberá zodpovednosť bez zvaľovania viny',
    'Addresses challenges openly and constructively':
        'Rieši výzvy otvorene a konštruktívne',
    'Engages stakeholders to drive shared resolution':
        'Zapája stakeholderov do spoločného riešenia',
    'Delivers corrective actions and sees them through':
        'Realizuje nápravné opatrenia a dotiahne ich do konca',
    'Walk me through an example where you used a structured approach to solve a complex problem. How did your insights or creativity help improve the final outcome?':
        'Prejdite príklad, kde ste použili štruktúrovaný prístup na riešenie komplexného problému. Ako vaše insights alebo kreativita zlepšili výsledok?',
    'What would you do differently if you approached this problem again?':
        'Čo by ste urobili inak, keby ste k problému pristúpili znova?',
    'Uses structured problem-solving (8D, Ishikawa, etc.)':
        'Používa štruktúrované riešenie problémov (8D, Ishikawa atď.)',
    'Applies data, evidence, and insights effectively':
        'Efektívne používa dáta, dôkazy a insights',
    'Adapts approach based on learnings':
        'Prispôsobuje prístup podľa naučeného',
    'Drives improvement, innovation, or better-than-baseline outcomes':
        'Prináša zlepšenie, inováciu alebo lepší výsledok než baseline',
    'Can you share an example of work you delivered that you felt proud of, and how you ensured it met a high standard? And if applicable, a time you recognised someone else’s strong performance?':
        'Môžete uviesť príklad práce, na ktorú ste boli hrdí, a ako ste zabezpečili vysoký štandard? Prípadne situáciu, keď ste ocenili silný výkon niekoho iného?',
    'Openly shares and recognises team or personal success':
        'Otvorene zdieľa a uznáva tímový alebo osobný úspech',
    'Acknowledges contributions of others with sincerity':
        'Úprimne uznáva prínos ostatných',
    'Promotes and models collective achievement':
        'Podporuje a modeluje kolektívny úspech',
    'Demonstrates commitment to high standards and quality':
        'Preukazuje záväzok k vysokým štandardom a kvalite',
    'Degree or equivalent experience in Supply Chain, Business, Engineering or a related discipline (or working towards)':
        'Vzdelanie alebo ekvivalentná skúsenosť v Supply Chain, Business, Engineering alebo príbuznom odbore (alebo prebiehajúce)',
    'Demonstrates foundational knowledge relevant to procurement, supply chain, and commercial concepts.':
        'Preukazuje základné znalosti relevantné pre procurement, supply chain a obchodné koncepty.',
    'Some exposure to procurement, supply chain or commercial environments would be beneficial':
        'Výhodou je skúsenosť s procurementom, supply chain alebo obchodným prostredím',
    'Shows awareness of procurement processes such as supplier management, claim handling, and commercial interactions.':
        'Prejavuje povedomie o procurement procesoch (riadenie dodávateľov, claimy, obchodné interakcie).',
    'Basic understanding of commercial principles, cost drivers or supplier relationships':
        'Základné pochopenie obchodných princípov, cost drivers alebo vzťahov s dodávateľmi',
    'Demonstrates understanding of cost, risk, and supplier dynamics within a programme and broader market context.':
        'Preukazuje pochopenie nákladov, rizík a dynamiky dodávateľov v rámci programu a širšieho trhu.',
    'Strong organisational skills with a structured and methodical approach to tasks':
        'Silné organizačné zručnosti so štruktúrovaným a metodickým prístupom',
    'Required to manage multiple inputs, trackers, and deadlines across stakeholders.':
        'Vyžaduje riadenie viacerých vstupov, trackerov a termínov naprieč stakeholdermi.',
    'Good attention to detail and ability to work with data accurately':
        'Dobrá pozornosť k detailu a schopnosť pracovať s dátami presne',
    'Ensures accuracy in procurement data, reporting, and decision-making inputs.':
        'Zabezpečuje presnosť v procurement dátach, reportingu a vstupoch do rozhodovania.',
    'Willingness to learn and develop within a procurement or supply chain environment':
        'Ochota učiť sa a rozvíjať sa v prostredí procurementu alebo supply chain',
    'Demonstrates curiosity, openness to feedback, and development mindset.':
        'Preukazuje zvedavosť, otvorenosť voči spätnej väzbe a mindset rozvoja.',
    'Ability to communicate clearly and work effectively within a team':
        'Schopnosť jasne komunikovať a efektívne pracovať v tíme',
    'Supports cross-functional working with Engineering, Quality, Finance and suppliers.':
        'Podporuje cross-functional spoluprácu s Engineering, Quality, Finance a dodávateľmi.',
    'Positive, proactive attitude with an interest in continuous improvement and problem solving':
        'Pozitívny, proaktívny prístup so záujmom o continuous improvement a riešenie problémov',
    'Reflects ability to resolve issues, improve processes, and contribute positively.':
        'Odráža schopnosť riešiť problémy, zlepšovať procesy a pozitívne prispievať.',
    'Fails': 'Nespĺňa',
    'Partial': 'Čiastočne',
    'Meets': 'Spĺňa',
    'Exceeds some': 'Čiastočne prevyšuje',
    'Exceeds all': 'Plne prevyšuje',
    'Fails to meet requirements': 'Nespĺňa požiadavky',
    'Fails to meet some key requirements': 'Nespĺňa niektoré kľúčové požiadavky',
    'Meets requirements satisfactorily': 'Spĺňa požiadavky uspokojivo',
    'Meets all and exceeds some requirements': 'Spĺňa všetky a niektoré prevyšuje',
    'Exceeds all requirements': 'Prevýšuje všetky požiadavky'
};

function translateInterviewPackText(text) {
    if (!text) return text;
    const lang = window.uiManager?.currentLanguage || 'sk';
    if (lang === 'sk' && INTERVIEW_PACK_SK[text]) {
        return INTERVIEW_PACK_SK[text];
    }
    if (window.uiManager?.translate) {
        const viaUi = window.uiManager.translate(text);
        if (viaUi && viaUi !== text) return viaUi;
    }
    return text;
}

InterviewPackManager.prototype.localizePack = function localizePack(packKey = 'buyer_i_master') {
    const pack = JSON.parse(JSON.stringify(this.getPack(packKey)));
    const t = translateInterviewPackText;

    pack.title = t(pack.title);
    (pack.sections || []).forEach(section => {
        section.title = t(section.title);
        if (section.note) section.note = t(section.note);
        if (section.intro) section.intro = section.intro.map(t);
        (section.questions || []).forEach(q => {
            q.title = t(q.title);
            q.prompt = t(q.prompt);
            if (q.promptInternal) q.promptInternal = t(q.promptInternal);
            if (q.followUps) q.followUps = q.followUps.map(t);
            if (q.indicators) q.indicators = q.indicators.map(t);
        });
    });
    (pack.skills || []).forEach(skill => {
        skill.skill = t(skill.skill);
        skill.detail = t(skill.detail);
    });
    if (pack.ratingLabels) {
        Object.keys(pack.ratingLabels).forEach(k => {
            pack.ratingLabels[k] = t(pack.ratingLabels[k]);
        });
    }
    return pack;
};

window.translateInterviewPackText = translateInterviewPackText;
window.INTERVIEW_PACK_SK = INTERVIEW_PACK_SK;
