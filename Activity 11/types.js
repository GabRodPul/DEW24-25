"use strict";
// https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
Object.defineProperty(exports, "__esModule", { value: true });
var SecondaryHoursType;
(function (SecondaryHoursType) {
    SecondaryHoursType[SecondaryHoursType["SECONDARY_HOURS_TYPE_UNSPECIFIED"] = 0] = "SECONDARY_HOURS_TYPE_UNSPECIFIED";
    SecondaryHoursType[SecondaryHoursType["DRIVE_THROUGH"] = 1] = "DRIVE_THROUGH";
    SecondaryHoursType[SecondaryHoursType["HAPPY_HOUR"] = 2] = "HAPPY_HOUR";
    SecondaryHoursType[SecondaryHoursType["DELIVERY"] = 3] = "DELIVERY";
    SecondaryHoursType[SecondaryHoursType["TAKEOUT"] = 4] = "TAKEOUT";
    SecondaryHoursType[SecondaryHoursType["KITCHEN"] = 5] = "KITCHEN";
    SecondaryHoursType[SecondaryHoursType["BREAKFAST"] = 6] = "BREAKFAST";
    SecondaryHoursType[SecondaryHoursType["LUNCH"] = 7] = "LUNCH";
    SecondaryHoursType[SecondaryHoursType["DINNER"] = 8] = "DINNER";
    SecondaryHoursType[SecondaryHoursType["BRUNCH"] = 9] = "BRUNCH";
    SecondaryHoursType[SecondaryHoursType["PICKUP"] = 10] = "PICKUP";
    SecondaryHoursType[SecondaryHoursType["ACCESS"] = 11] = "ACCESS";
    SecondaryHoursType[SecondaryHoursType["SENIOR_HOURS"] = 12] = "SENIOR_HOURS";
    SecondaryHoursType[SecondaryHoursType["ONLINE_SERVICE_HOURS"] = 13] = "ONLINE_SERVICE_HOURS";
})(SecondaryHoursType || (SecondaryHoursType = {}));
var BusinessStatus;
(function (BusinessStatus) {
    BusinessStatus[BusinessStatus["BUSINESS_STATUS_UNSPECIFIED"] = 0] = "BUSINESS_STATUS_UNSPECIFIED";
    BusinessStatus[BusinessStatus["OPERATIONAL"] = 1] = "OPERATIONAL";
    BusinessStatus[BusinessStatus["CLOSED_TEMPORARILY"] = 2] = "CLOSED_TEMPORARILY";
    BusinessStatus[BusinessStatus["CLOSED_PERMANENTLY"] = 3] = "CLOSED_PERMANENTLY";
})(BusinessStatus || (BusinessStatus = {}));
var PriceLevel;
(function (PriceLevel) {
    PriceLevel[PriceLevel["PRICE_LEVEL_UNSPECIFIED"] = 0] = "PRICE_LEVEL_UNSPECIFIED";
    PriceLevel[PriceLevel["PRICE_LEVEL_FREE"] = 1] = "PRICE_LEVEL_FREE";
    PriceLevel[PriceLevel["PRICE_LEVEL_INEXPENSIVE"] = 2] = "PRICE_LEVEL_INEXPENSIVE";
    PriceLevel[PriceLevel["PRICE_LEVEL_MODERATE"] = 3] = "PRICE_LEVEL_MODERATE";
    PriceLevel[PriceLevel["PRICE_LEVEL_EXPENSIVE"] = 4] = "PRICE_LEVEL_EXPENSIVE";
    PriceLevel[PriceLevel["PRICE_LEVEL_VERY_EXPENSIVE"] = 5] = "PRICE_LEVEL_VERY_EXPENSIVE";
})(PriceLevel || (PriceLevel = {}));
var FuelType;
(function (FuelType) {
    FuelType[FuelType["FUEL_TYPE_UNSPECIFIED"] = 0] = "FUEL_TYPE_UNSPECIFIED";
    FuelType[FuelType["DIESEL"] = 1] = "DIESEL";
    FuelType[FuelType["REGULAR_UNLEADED"] = 2] = "REGULAR_UNLEADED";
    FuelType[FuelType["MIDGRADE"] = 3] = "MIDGRADE";
    FuelType[FuelType["PREMIUM"] = 4] = "PREMIUM";
    FuelType[FuelType["SP91"] = 5] = "SP91";
    FuelType[FuelType["SP91_E10"] = 6] = "SP91_E10";
    FuelType[FuelType["SP92"] = 7] = "SP92";
    FuelType[FuelType["SP95"] = 8] = "SP95";
    FuelType[FuelType["SP95_E10"] = 9] = "SP95_E10";
    FuelType[FuelType["SP98"] = 10] = "SP98";
    FuelType[FuelType["SP99"] = 11] = "SP99";
    FuelType[FuelType["SP100"] = 12] = "SP100";
    FuelType[FuelType["LPG"] = 13] = "LPG";
    FuelType[FuelType["E80"] = 14] = "E80";
    FuelType[FuelType["E85"] = 15] = "E85";
    FuelType[FuelType["METHANE"] = 16] = "METHANE";
    FuelType[FuelType["BIO_DIESEL"] = 17] = "BIO_DIESEL";
    FuelType[FuelType["TRUCK_DIESEL"] = 18] = "TRUCK_DIESEL";
})(FuelType || (FuelType = {}));
var EVConnectorType;
(function (EVConnectorType) {
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_UNSPECIFIED"] = 0] = "EV_CONNECTOR_TYPE_UNSPECIFIED";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_OTHER"] = 1] = "EV_CONNECTOR_TYPE_OTHER";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_J1772"] = 2] = "EV_CONNECTOR_TYPE_J1772";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_TYPE_2"] = 3] = "EV_CONNECTOR_TYPE_TYPE_2";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_CHADEMO"] = 4] = "EV_CONNECTOR_TYPE_CHADEMO";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_CCS_COMBO_1"] = 5] = "EV_CONNECTOR_TYPE_CCS_COMBO_1";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_CCS_COMBO_2"] = 6] = "EV_CONNECTOR_TYPE_CCS_COMBO_2";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_TESLA"] = 7] = "EV_CONNECTOR_TYPE_TESLA";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T"] = 8] = "EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T";
    EVConnectorType[EVConnectorType["EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET"] = 9] = "EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET";
})(EVConnectorType || (EVConnectorType = {}));
var SpatialRelationship;
(function (SpatialRelationship) {
    SpatialRelationship[SpatialRelationship["NEAR"] = 0] = "NEAR";
    SpatialRelationship[SpatialRelationship["WHITIN"] = 1] = "WHITIN";
    SpatialRelationship[SpatialRelationship["BESIDE"] = 2] = "BESIDE";
    SpatialRelationship[SpatialRelationship["ACROSS_THE_ROAD"] = 3] = "ACROSS_THE_ROAD";
    SpatialRelationship[SpatialRelationship["DOWN_THE_ROAD"] = 4] = "DOWN_THE_ROAD";
    SpatialRelationship[SpatialRelationship["AROUND_THE_CORNER"] = 5] = "AROUND_THE_CORNER";
    SpatialRelationship[SpatialRelationship["BEHIND"] = 6] = "BEHIND";
})(SpatialRelationship || (SpatialRelationship = {}));
var Containment;
(function (Containment) {
    Containment[Containment["CONTAINMENT_UNSPECIFIED"] = 0] = "CONTAINMENT_UNSPECIFIED";
    Containment[Containment["WITHIN"] = 1] = "WITHIN";
    Containment[Containment["OUTSKIRTS"] = 2] = "OUTSKIRTS";
    Containment[Containment["NEAR"] = 3] = "NEAR";
})(Containment || (Containment = {}));
