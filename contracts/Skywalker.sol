pragma solidity ^0.4.11;

import "./Strings.sol";

contract Skywalker {
    using Strings for *;

    address public admin;
    uint numFlights;
    uint numSeats;
    mapping (string => Flight) flights;
    string[6] COLUMNS = ["A", "B", "C", "D", "E", "F"];

    struct Seat {
        uint id;
        string flightNumber;
        string group;
        address owner;
        string displayName;
    }

    struct Flight {
        uint id;
        string flightNumber;
        address operatingCarrierAddress;
        uint[] seatIds;
        mapping (uint => Seat) seats;
    }

    function Skywalker() {
        admin = msg.sender;
        numFlights = 0;
        numSeats = 0;
    }

    function createFlight(string _flightNumber) returns (bool) {
        flights[_flightNumber] = Flight({
            id: numFlights + 1,
            flightNumber: _flightNumber,
            operatingCarrierAddress: msg.sender,
            seatIds: new uint[](0)
        });

        numFlights = numFlights + 1;

        return true;
    }

    function addSeatingGroupToFlight(string _flightNumber, string _group, uint _rows) returns (bool) {
        for (uint i = 0; i < _rows; i++) {
            createSeat(_flightNumber, _group, COLUMNS[i]);
            createSeat(_flightNumber, _group, COLUMNS[i + 1]);
            createSeat(_flightNumber, _group, COLUMNS[i + 2]);
            createSeat(_flightNumber, _group, COLUMNS[i + 3]);
            createSeat(_flightNumber, _group, COLUMNS[i + 4]);
            createSeat(_flightNumber, _group, COLUMNS[i + 5]);
        }

        return true;
    }

    function createSeat(string _flightNumber, string _group, string _displayName) internal returns (bool) {
        Flight flight = flights[_flightNumber];

        flight.seats[numSeats + 1] = Seat({
            id: numSeats + 1,
            flightNumber: _flightNumber,
            group: _group,
            owner: msg.sender,
            displayName: _displayName,
        });

        flight.seatIds.push(numSeats + 1);

        numSeats = numSeats + 1;

        return true;
    }

    function getFlight(string _flightNumber) public constant returns (uint, string, address) {
        Flight flight = flights[_flightNumber];

        return (
            flight.id,
            flight.flightNumber,
            flight.operatingCarrierAddress
        );
    }

    function getSeatsForFlight(string _flightNumber) public constant returns (string) {
        Flight flight = flights[_flightNumber];
        string memory seats;

        for (uint i; i < flight.seatIds.length; i++) {
            seats = seats.toSlice().concat(flight.seats[flight.seatIds[i]].displayName.toSlice());
            seats = seats.toSlice().concat(",".toSlice());
        }

        return seats;
    }

    function getNumberOfSeatsForFlight(string _flightNumber) public constant returns (uint) {
        Flight flight = flights[_flightNumber];

        return flight.seatIds.length;
    }
}
