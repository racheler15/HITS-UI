from backend.app.utils import extract_granularities, load_json_file


file_path = 'mock_data/updated_data_gov_mock_data.json'
json_data = load_json_file(file_path)

time_granu, geo_granu = extract_granularities(json_data)

print("Temporal Granularities:", time_granu)
print("Geographic Granularities:", geo_granu)

# Inferred time/geo granularities if no constraints are provided in the prompt
# Temporal Granularities: [['Year'], ['year', 'month', 'day', 'hour'], ['day'], ['Date'], ['CRASH DATE', 'CRASH TIME'], ['Year: 2019'], ['day'], ['YEAR'], ['Annual Average 2011', 'Annual Average 2009'], [], ['YearStart', 'YearEnd'], ['Date Recorded'], ['YEAR'], ['YearStart', 'YearEnd'], ['hour', 'day', 'year'], ['Crash Date/Time'], ['Read_Date', 'Time (24:00)'], ['Year', 'Date'], ['Time Period Start Date', 'Time Period End Date'], ['YEAR', 'MONTH'], [], ['Year'], ['weekly'], ['year'], [], ['Yearly', 'Weekly'], ['Year'], ['daily', 'yearly'], ['CRASH_DATE', 'CRASH_HOUR', 'CRASH_DAY_OF_WEEK', 'CRASH_MONTH', 'DATE_POLICE_NOTIFIED'], ['Year'], ['YEAR'], ['Week'], ['Month', 'Year'], ['ARREST_DATE'], ['year'], ['year'], ['year'], [], ['year', 'month', 'day'], ['Monthly', 'Day'], ['Month', 'Year'], ['YEAR'], [], ['Every two hours'], ['Year'], ['date'], ['year'], ['Annual'], ['Month', 'Year'], ['OCCUR_DATE', 'OCCUR_TIME'], ['Access Days Time'], ['Month', 'Year'], [], [], [], ['sample_date'], ['Date', 'Time'], ['Daily', 'Weekly'], ['SCHOOLYEAR'], ['YEAR'], [], ['Date Of Stop', 'Time Of Stop'], ['Construction Date'], ['Year'], [], ['Week'], ['Month', 'Cycle'], ['year'], ['Year', 'Month'], ['Date Last Confirmed', 'Open Date', 'Updated At'], ['Year'], ['Year'], ['YEAR'], ['Quarterly'], [], ['monthly'], ['month', 'year'], ['year', 'date'], ['YearStart'], ['Year Last Documented'], ['Year'], ['Posting Date', 'Posting Updated', 'Process Date'], ['day'], ['week'], ['Fiscal Year'], ['Week'], [], ['day'], [], ['Date'], ['minute'], ['YEAR', 'MONTH'], ['Annually'], ['Month', 'Year'], ['year'], ['DateOfBite']]
# Geographic Granularities: [['City', 'County', 'State', 'Postal Code', 'Census Tract', 'Vehicle Location'], ['city', 'latitude and longitude'], [], ['City', 'State'], ['BOROUGH', 'ZIP CODE', 'LATITUDE', 'LONGITUDE', 'ON STREET NAME', 'CROSS STREET NAME', 'OFF STREET NAME'], ['Country: United States'], ['New York'], [], ['Bedford Stuyvesant - Crown Heights'], ['state'], ['LocationAbbr', 'LocationDesc'], ['Town', 'Address'], [], ['LocationAbbr', 'LocationDesc', 'GeoLocation'], ['station', 'state', 'region', 'country'], ['Latitude', 'Longitude'], ['Site_Id'], ['Block', 'Community Area', 'District', 'Ward'], ['State'], [], ['zip'], [], ['national'], ['managed care organization'], ['ZIP'], ['Country', 'State'], ['State/Territory', 'County'], ['station'], ['LATITUDE', 'LONGITUDE', 'LOCATION', 'STREET_NO', 'STREET_DIRECTION', 'STREET_NAME', 'BEAT_OF_OCCURRENCE'], ['State'], ['LocationAbbr', 'LocationDesc', 'GeoLocation'], ['Chicago'], ['Port', 'State', 'Border'], ['Latitude', 'Longitude'], [], ['coordinates'], [], ['Neighborhood'], ['district'], ['City', 'Zip Code', 'Street Address'], ['County', 'State'], [], ['State'], ['7315 Muncaster Mill Rd., Derwood MD  20855'], ['State', 'County'], ['zip code'], ['county'], ['Montgomery County, MD'], ['Jurisdiction of Occurrence'], ['BORO', 'Latitude', 'Longitude'], ['Street Address', 'City'], ['Hospital'], ['address'], [], [], ['latitude', 'longitude', 'county_name', 'station_name', 'full_station_name'], ['Area Name', 'Location', 'Latitude', 'Longitude'], ['Zip Code'], ['LAT', 'LON'], [], ['United States'], ['Location', 'Latitude', 'Longitude', 'Geolocation'], ['Bldg State', 'Bldg County', 'Bldg City', 'Bldg Address1', 'Bldg Address2', 'Bldg Zip'], [], ['Address', 'City', 'State', 'ZipCode', 'Better_Lat', 'Better_Long'], ['United States', 'HHS Region'], ['Borough', 'Block ', 'Lot', 'Community Board', 'Council District', 'House Number', 'Street Name', 'Zip Code'], [], [], ['City', 'State', 'Country'], [], ['State', 'Continuum of Care'], ['LocationAbbr', 'LocationDesc'], ['County'], ['zip code'], ['station'], ['county'], ['address', 'street', 'latitude and longitude'], ['LocationAbbr', 'LocationDesc'], ['County'], ['State'], ['Work Location', 'Work Location 1'], ['election'], [], ['Work Location Borough'], ['ZIP Code'], ['Borough', 'Latitude', 'Longitude'], ['station'], ['site_location', 'site_latitude', 'site_longitude', 'site_elevation'], ['Residence City', 'Residence County', 'Residence State', 'Injury City', 'Injury County', 'Injury State', 'Death City', 'Death County', 'Death State', 'ResidenceCityGeo', 'InjuryCityGeo', 'DeathCityGeo'], ['ZIP Code'], ['BENE_GEO_LVL', 'BENE_STATE_ABRVTN', 'BENE_COUNTY_DESC'], [], ['Maryland'], ['state'], ['Borough', 'ZipCode']]

# Temporal Granularities: [['Year'], ['Day', 'Hour'], ['Day'], ['Day'], ['Day', 'Hour', 'Minute'], ['Year'], ['Day'], ['Year'], ['Annual Average 2011', 'Annual Average 2009'], ['Year'], ['YearStart', 'YearEnd'], ['Year', 'Quarter', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'], ['Year'], ['YearStart', 'YearEnd'], ['Hour'], ['Hour', 'Day', 'Month', 'Year'], ['Day', 'Hour'], ['Year', 'Day'], ['Week'], ['YEAR', 'MONTH'], ['Year'], ['Year'], ['Week'], ['Year'], [], ['Day', 'Year'], ['Year'], ['Day'], ['Hour', 'Day', 'Month'], ['Year'], ['YEAR'], ['Week'], ['Dec 2023'], ['ARREST_DATE'], ['Year'], ['Year'], ['Year'], ['Year'], ['Year'], ['Day'], ['September 30 2022', 'December 31 2022'], ['Year'], [], ['Hour', 'Day', 'Year'], ['Year'], ['Day'], ['Year'], ['Year'], ['Year', 'Month'], ['Day', 'Hour'], ['Day'], ['Month'], [], [], [], ['Minute'], ['DATE OCC', 'TIME OCC'], ['Day', 'Week'], ['Year'], ['Year'], [], ['Day', 'Hour', 'Minute'], ['Year'], ['Year'], [], ['Week', 'Year'], ['Month'], ['Year', 'Day'], ['Year', 'Month'], ['Day', 'Hour', 'Minute', 'Second'], ['Year'], ['Year'], ['Year'], ['Year', 'Quarter'], ['Year'], ['Month'], ['Month'], ['Day', 'Year'], ['YearStart'], ['Year'], ['Year'], ['Day'], ['Day'], ['Week'], ['Year'], ['Week'], [], ['Day'], [], ['Day'], ['Second'], ['Year'], ['Year'], ['Year', 'Month'], ['Year'], ['Year', 'Quarter', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second']]
# Geographic Granularities: [['State/Province', 'County/District', 'City', 'Zip Code/Postal Code'], ['City'], ['State/Province'], ['City', 'State/Province'], ['State/Province', 'City', 'Zip Code/Postal Code'], ['Country'], [], [], ['Bedford Stuyvesant - Crown Heights', 'Bedford Stuyvesant - Crown Heights'], ['State/Province'], ['LocationAbbr', 'LocationDesc'], ['Continent', 'Country', 'State/Province', 'County/District', 'City', 'Zip Code/Postal Code'], [], ['LocationAbbr', 'LocationDesc', 'GeoLocation'], ['State/Province', 'City'], ['City', 'State/Province'], ['City'], ['City', 'Block'], ['Country', 'State/Province'], [], ['Zip Code/Postal Code', 'State/Province'], [], ['Country', 'State/Province'], ['County/District'], ['Zip Code/Postal Code'], ['Country', 'State/Province'], ['County'], ['State/Province', 'City'], ['City'], ['State/Province'], ['LocationAbbr', 'LocationDesc'], ['City'], ['Roma, Texas', 'US-Mexico Border'], ['Latitude', 'Longitude'], ['County/District'], ['City'], [], ['City'], ['State/Province', 'County/District'], ['City', 'Zip Code/Postal Code'], ['Riverside', 'CA', 'Prince William', 'VA'], [], ['State/Province'], ['City'], ['State/Province', 'County/District'], ['Zip Code/Postal Code'], ['County/District'], ['County/District'], ['Country'], ['City'], ['Street', 'City'], ['Country'], ['City'], [], [], ['County/District'], ['AREA NAME', 'LOCATION', 'LAT', 'LON'], ['State/Province'], ['City'], [], [], ['State/Province', 'City'], ['City', 'State/Province', 'County/District', 'Zip Code/Postal Code'], ['City'], ['City', 'State/Province', 'Zip Code/Postal Code'], ['Country', 'State/Province'], ['Zip Code/Postal Code'], [], [], ['Country', 'State/Province', 'City', 'Zip Code/Postal Code'], ['Country'], ['State/Province'], ['State/Province'], ['County'], ['Zip Code/Postal Code'], ['City'], ['County/District'], ['City', 'Street'], ['LocationAbbr', 'LocationDesc'], ['County/District'], ['State/Province'], ['City'], ['State/Province'], [], ['City'], ['Zip Code/Postal Code'], ['City'], ['City'], ['City'], ['City', 'County/District', 'State/Province'], ['Zip Code/Postal Code'], ['Country', 'State/Province', 'County/District'], [], ['State/Province'], ['State/Province'], ['Continent', 'Country', 'State/Province', 'County/District', 'City', 'Zip Code/Postal Code']]