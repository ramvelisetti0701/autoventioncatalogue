const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const useCasesSchema = new Schema({
    useCaseID: { type: Number },
    name: { type: String },
    processScenario: { type: String },
    summaryAsIsProcess: { type: String },
    automationScope: { type: String },
    functionality: { type: String },
    processArea: { type: String },
    character: { type: String },
    botImageSrc: { type: String },
    imageSrc: { type: String },
    benefits: { type: String },
    botFunctionality: { type: String },
    processFlow: { type: String },
    processMap: { type: String },
    rpaToolUsed: { type: String },
});

const charactersSchema = new Schema({
    characterID: { type: Number },
    character: { type: String },
    botImageSrc: { type: String },
    imageSrc: { type: String },
    processArea: { type: String }
});

const processAreasSchema = new Schema({
    processID: { type: Number },
    processArea: { type: String },
    imageSrc: { type: String },
});

const rpaToolsSchema = new Schema({
    rpaToolID: { type: Number },
    rpaToolUsed: { type: String },
});

const functionalitiesSchema = new Schema({
    functionalityID: { type: Number },
    functionality: { type: String },
});

const customersSchema = new Schema({
    customerID: { type: Number },
    customers: { type: String },
});

const cpgUnitsSchema = new Schema({
    cpgUnitID: { type: Number },
    cpgUnit: { type: String },
});

const botFunctionalitiesSchema = new Schema({
    botFunctionalityID: { type: Number },
    botFunctionality: { type: String },
});

const benefitsSchema = new Schema({
    benefitID: { type: Number },
    benefit: { type: String },
});

const masterDataSchema = new Schema({
    serialNumber: { type: Number },
    customer: { type: String },
    processArea: { type: String },
    character: { type: String },
    name: { type: String },
    processScenario: { type: String },
    summaryAsIsProcess: { type: String },
    automationScope: { type: String },
    cpgUnit: { type: String },
    ticketsSrReducedPerAnnum: { type: String },
    endDate: { type: String },
    quarterlyResults: { type: String },
    benefits: { type: String },
    botFunctionality: { type: String },
    functionality: { type: String },
    rpaToolUsed: { type: String },
    comments: { type: String },
    owner: { type: String },
    ptReferenceNumber: { type: String },
    venuYN: { type: String },
    sameerYN: { type: String },
    commentsSameer: { type: String },
    processMap: { type: String }
});

const Benefits = mongoose.model('benefits', benefitsSchema, 'benefits');
const BotFunctionalities = mongoose.model('botFunctionalities', botFunctionalitiesSchema, 'botFunctionalities');
const Characters = mongoose.model('characters', charactersSchema, 'characters');
const CpgUnits = mongoose.model('cpgUnits', cpgUnitsSchema, 'cpgUnits');
const Customers = mongoose.model('customers', customersSchema, 'customers');
const Functionalities = mongoose.model('functionalities', functionalitiesSchema, 'functionalities');
const MasterData = mongoose.model('masterData', masterDataSchema, 'masterData');
const ProcessAreas = mongoose.model('processAreas', processAreasSchema, 'processAreas');
const RPATools = mongoose.model('rpaTools', rpaToolsSchema, 'rpaTools');
const UseCases = mongoose.model('useCases', useCasesSchema, 'useCases');

const mySchemas = {
    Benefits: Benefits,
    BotFunctionalities: BotFunctionalities,
    Characters: Characters,
    CpgUnits: CpgUnits,
    Customers: Customers,
    Functionalities: Functionalities,
    MasterData: MasterData,
    ProcessAreas: ProcessAreas,
    RPATools: RPATools,
    UseCases: UseCases,
};

module.exports = mySchemas;