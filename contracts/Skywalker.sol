pragma solidity ^0.4.11;

contract Skywalker {
    address public admin;
    uint numFlights;
    uint numSeats;
    mapping (string => Flight) flights;

    struct Seat {
        uint id;
        string flightNumber;
        string group;
        address owner;
    }

    struct Flight {
        uint id;
        string flightNumber;
        address operatingCarrierAddress;
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
            operatingCarrierAddress: msg.sender
        });

        numFlights = numFlights + 1;

        return true;
    }

    function addSeatingGroupToFlight(string _flightNumber, string _group, uint _numSeats) returns (bool) {
        for (uint i = 0; i < _numSeats; i++) {
            createSeat(_flightNumber, _group);
        }

        return true;
    }

    function createSeat(string _flightNumber, string _group) internal returns (bool) {
        Flight flight = flights[_flightNumber];

        flight.seats[numSeats + 1] = Seat({
            id: numSeats + 1,
            flightNumber: _flightNumber,
            group: _group,
            owner: msg.sender
        });

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
}
