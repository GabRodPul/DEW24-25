// https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places

type LocalizedText = {
    "text": string,
    "languageCode": string
};

type AddressComponent = {
    "longText": string,
    "shortText": string,
    "types": string[],
    "languageCode": string
}

type PlusCode = {
    "globalCode": string,
    "compoundCode": string
};

type LatLng = {
    "latitude": number,
    "longitude": number
}

type Review = {
    "name": string,
    "relativePublishTimeDescription": string,
    "text": LocalizedText,
    "originalText": LocalizedText,
    "rating": number,
    "authorAttribution": AuthorAttribution,
    "publishTime": string
}

type AuthorAttribution = {
    "displayName": string,
    "uri": string,
    "photoUri": string
}

type OpeningHours = {
    "periods": Period,
    "weekdayDescriptions": string[],
    "secondaryHoursType": SecondaryHoursType,
    "specialDays": SpecialDay,
    "openNow": boolean
}

type Period = {
    "open":  Point,
    "close": Point
}

type Point = {
    "date": Date,
    "truncated": boolean,
    "day":       number, // Should be integer
    "hour":      number, // Should be integer
    "minute":    number, // Should be integer
}

type Date = {
    "year":  number, // Should be integer
    "month": number, // Should be integer
    "day":   number, // Should be integer
}

enum SecondaryHoursType {
    SECONDARY_HOURS_TYPE_UNSPECIFIED,
    DRIVE_THROUGH,
    HAPPY_HOUR,
    DELIVERY,
    TAKEOUT,
    KITCHEN,
    BREAKFAST,
    LUNCH,
    DINNER,
    BRUNCH,
    PICKUP,
    ACCESS,
    SENIOR_HOURS,
    ONLINE_SERVICE_HOURS,
}

type SpecialDay = {
    "date": Date
}

type Photo = {
    "name": string,
    "widthPx":  number, // Should be integer
    "heightPx": number, // Should be integer
    "authorAttributions": AuthorAttribution[]
}

enum BusinessStatus {
    BUSINESS_STATUS_UNSPECIFIED,
    OPERATIONAL,
    CLOSED_TEMPORARILY,
    CLOSED_PERMANENTLY
}

enum PriceLevel {
    PRICE_LEVEL_UNSPECIFIED,
    PRICE_LEVEL_FREE,
    PRICE_LEVEL_INEXPENSIVE,
    PRICE_LEVEL_MODERATE,
    PRICE_LEVEL_EXPENSIVE,
    PRICE_LEVEL_VERY_EXPENSIVE,
}

type Attribution = {
    "provider": string,
    "providerUri": string
}

type PaymentOptions = {
    "acceptsCreditCards": boolean,
    "acceptsDebitCards": boolean,
    "acceptsCashOnly": boolean,
    "acceptsNfc": boolean
}

type ParkingOptions = {
    "freeParkingLot": boolean,
    "paidParkingLot": boolean,
    "freeStreetParking": boolean,
    "paidStreetParking": boolean,
    "valetParking": boolean,
    "freeGarageParking": boolean,
    "paidGarageParking": boolean
}

type SubDestination = {
    "name": string,
    "id": string
}

type AccessibilityOptions = {
    "wheelchairAccessibleParking": boolean,
    "wheelchairAccessibleEntrance": boolean,
    "wheelchairAccessibleRestroom": boolean,
    "wheelchairAccessibleSeating": boolean
}

type FuelOptions = {
    "fuelPrices": FuelPrice[]
}

type FuelPrice = {
    "type": FuelType,
    "price": Money,
    "updateTime": string
}

enum FuelType {
    FUEL_TYPE_UNSPECIFIED,
    DIESEL,
    REGULAR_UNLEADED,
    MIDGRADE,
    PREMIUM,
    SP91,
    SP91_E10,
    SP92,
    SP95,
    SP95_E10,
    SP98,
    SP99,
    SP100,
    LPG,
    E80,
    E85,
    METHANE,
    BIO_DIESEL,
    TRUCK_DIESEL
}

type Money = {
    "currencyCode": string,
    "units": string,
    "nanos": number // Should be integer
}

type EVChargeOptions = {
    "connectorCount": number, // Should be integer
    "connectorAggregation": ConnectorAggregation[]
}

type ConnectorAggregation = {
    "type": EVConnectorType,
    "maxChargeRateKw": number,
    "count": number, // Should be an integer
    "availabilityLastUpdateTime": string,
    "availableCount": number, // Should be an integer
    "outOfServiceCount": number, // Should be an integer
}

enum EVConnectorType {
    EV_CONNECTOR_TYPE_UNSPECIFIED,
    EV_CONNECTOR_TYPE_OTHER,
    EV_CONNECTOR_TYPE_J1772,
    EV_CONNECTOR_TYPE_TYPE_2,
    EV_CONNECTOR_TYPE_CHADEMO,
    EV_CONNECTOR_TYPE_CCS_COMBO_1,
    EV_CONNECTOR_TYPE_CCS_COMBO_2,
    EV_CONNECTOR_TYPE_TESLA,
    EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T,
    EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET
}

type GenerativeSummary = {
    "overview": LocalizedText,
    "description": LocalizedText,
    "references": References
}

type References = {
    "reviews": Review[],
    "places": string[]
}

type AreaSummary = {
    "contentBlocks": ContentBlock[]
}

type ContentBlock = {
    "topic": string,
    "content": LocalizedText,
    "references": References
}

type AddressDescriptor = {
    "landmarks": Landmark[],
    "areas": Area[]
}

type Landmark = {
    "name": string,
    "placeId": string,
    "displayName": LocalizedText,
    "types": string[],
    "spatialRelationship": SpatialRelationship,
    "straightLineDistanceMeters": number,
    "travelDistanceMeters": number
}

enum SpatialRelationship {
    NEAR,
    WHITIN,
    BESIDE,
    ACROSS_THE_ROAD,
    DOWN_THE_ROAD,
    AROUND_THE_CORNER,
    BEHIND
}

type Area = {
    "name": string,
    "placeId": string,
    "displayName": LocalizedText,
    "containment": Containment
}

enum Containment {
    CONTAINMENT_UNSPECIFIED,
    WITHIN,
    OUTSKIRTS,
    NEAR
}

type Place = {
    "name": string,
    "id": string,
    "displayName": LocalizedText,
    "types": string[],
    "primaryType": string,
    "primaryTypeDisplayName": LocalizedText,
    "nationalPhoneNumber": string,
    "internationalPhoneNumber": string,
    "formattedAddress": string,
    "shortFormattedAddress": string,
    "addressComponents": AddressComponent[],
    "plusCode": PlusCode,
    "location": LatLng,
    "viewport": {
        "low": LatLng,
        "high": LatLng
    },
    "rating": number,
    "googleMapsUri": string,
    "websiteUri": string,
    "reviews": Review,
    "regularOpeningHours": OpeningHours,
    "photos": Photo[],
    "adrFormatAddress": string,
    "businessStatus": BusinessStatus,
    "priceLevel": PriceLevel,
    "attributions": Attribution[],
    "iconMaskBaseUri": string,
    "iconBackgroundColor": string,
    "currentOpeningHours": OpeningHours,
    "currentSecondaryOpeningHours": OpeningHours[],
    "regularSecondaryOpeningHours": OpeningHours[],
    "editorialSummary": LocalizedText,
    "paymentOptions": PaymentOptions,
    "parkingOptions": ParkingOptions,
    "subDestinations": SubDestination[],
    "fuelOptions": FuelOptions,
    "evChargeOptions": EVChargeOptions,
    "generativeSummary": GenerativeSummary,
    "areaSummary": AreaSummary,
    "addressDescriptor": AddressDescriptor,
    "utcOffsetMinutes": number, // Should be integer
    "userRatingCount": number, // Should be integer
    "takeout": boolean,
    "delivery": boolean,
    "dineIn": boolean,
    "curbsidePickup": boolean,
    "reservable": boolean,
    "servesBreakfast": boolean,
    "servesLunch": boolean,
    "servesDinner": boolean,
    "servesBeer": boolean,
    "servesWine": boolean,
    "servesBrunch": boolean,
    "servesVegetarianFood": boolean,
    "outdoorSeating": boolean,
    "liveMusic": boolean,
    "menuForChildren": boolean,
    "servesCocktails": boolean,
    "servesDessert": boolean,
    "servesCoffee": boolean,
    "goodForChildren": boolean,
    "allowsDogs": boolean,
    "restroom": boolean,
    "goodForGroups": boolean,
    "goodForWatchingSports": boolean,
    "accessibilityOptions": AccessibilityOptions
}

export { Place };