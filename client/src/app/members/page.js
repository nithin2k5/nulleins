"use client"
import React, {useState, useEffect} from 'react';
import './page.css';
import './mobileview.css';

const membersData = [
    { sno: 1, studentId: '2100031817', name: 'Deepak Reddy Gathpa',branchAndYear:'CSE III' , role: 'President' },
    { sno: 2, studentId: '2200030805', name: 'Sai Manikanta',branchAndYear:'CSE II' , role: 'Vice President' },
    { sno: 1, studentId: '2300010010', name: 'Nandini kambham', branchAndYear: 'Bio technology', role: 'Member' },
    { sno: 2, studentId: '2300030065', name: 'BALLA LAKSHMI SUDHARSHINI', branchAndYear: 'CSE', role: 'Member' },
    { sno: 3, studentId: '2300030141', name: 'Chithaluru Rasagna', branchAndYear: 'CSE', role: 'Member' },
    { sno: 4, studentId: '2300030218', name: 'Naga Smrithi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 5, studentId: '2300030224', name: 'Grandhi Sruthika', branchAndYear: 'CSE', role: 'Member' },
    { sno: 6, studentId: '2300030241', name: 'Guntupalli Siri sanjana', branchAndYear: 'CSE', role: 'Member' },
    { sno: 7, studentId: '2300030354', name: 'Kotaru Alekhya', branchAndYear: 'CSE', role: 'Member' },
    { sno: 8, studentId: '2300030493', name: 'VARSHINI PADAMATA', branchAndYear: 'CSE', role: 'Member' },
    { sno: 9, studentId: '2300030567', name: 'R. Niharika bai', branchAndYear: 'CSE', role: 'Member' },
    { sno: 10, studentId: '2300030594', name: 'Sai sindhuja Chinnam', branchAndYear: 'CSE', role: 'Member' },
    { sno: 11, studentId: '2300030598', name: 'Sali. Shalini', branchAndYear: 'CSE', role: 'Member' },
    { sno: 12, studentId: '2300030678', name: 'Lavanya thota', branchAndYear: 'CSE', role: 'Member' },
    { sno: 13, studentId: '2300030713', name: 'Veeramachaneni jayathi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 14, studentId: '2300030752', name: 'Y.Sunaina', branchAndYear: 'CSE', role: 'Member' },
    { sno: 15, studentId: '2300030897', name: 'Narla Lakshmi Alekhya', branchAndYear: 'CSE', role: 'Member' },
    { sno: 16, studentId: '2300031370', name: 'Polamarasetti Ashmitha', branchAndYear: 'CSE', role: 'Member' },
    { sno: 17, studentId: '2300031461', name: 'Devabhakthuni Bhavani', branchAndYear: 'CSE', role: 'Member' },
    { sno: 18, studentId: '2300031513', name: 'Geethika Tummala', branchAndYear: 'CSE', role: 'Member' },
    { sno: 19, studentId: '2300031746', name: 'Joshika Vallabhaneni', branchAndYear: 'CSE', role: 'Member' },
    { sno: 20, studentId: '2300031807', name: 'Geethika Tanneedi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 21, studentId: '2300031994', name: 'Sakka Alekhya', branchAndYear: 'CSE', role: 'Member' },
    { sno: 22, studentId: '2300032032', name: 'Bellamkonda sadhana', branchAndYear: 'CSE', role: 'Member' },
    { sno: 23, studentId: '2300032052', name: 'Rishitha Naramaneni', branchAndYear: 'CSE', role: 'Member' },
    { sno: 24, studentId: '2300032108', name: 'ADABALA KAVYA', branchAndYear: 'CSE', role: 'Member' },
    { sno: 25, studentId: '2300032310', name: 'Gangavaram Mounika', branchAndYear: 'CSE', role: 'Member' },
    { sno: 26, studentId: '2300032352', name: 'Mohammad.Naveda Muskan', branchAndYear: 'CSE', role: 'Member' },
    { sno: 27, studentId: '2300032637', name: 'Shruthika padma', branchAndYear: 'CSE', role: 'Member' },
    { sno: 28, studentId: '2300032768', name: 'G.Jyothi vyshnavi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 29, studentId: '2300032833', name: 'Penakati. Renu Neeraja', branchAndYear: 'CSE', role: 'Member' },
    { sno: 30, studentId: '2300032939', name: 'Bandla bhargavi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 31, studentId: '2300032966', name: 'Adapa.Amrutha', branchAndYear: 'CSE', role: 'Member' },
    { sno: 32, studentId: '2300033100', name: 'G.Reddyprasanna', branchAndYear: 'CSE', role: 'Member' },
    { sno: 33, studentId: '2300033133', name: 'K.V.Vyshnavi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 34, studentId: '2300033286', name: 'k.sucharitha', branchAndYear: 'CSE', role: 'Member' },
    { sno: 35, studentId: '2300033335', name: 'Y.Trinayani', branchAndYear: 'CSE', role: 'Member' },
    { sno: 36, studentId: '2300033395', name: 'Kosaraju Srihitha', branchAndYear: 'CSE', role: 'Member' },
    { sno: 37, studentId: '2300033419', name: 'Kethineni pavani', branchAndYear: 'CSE', role: 'Member' },
    { sno: 38, studentId: '2300033492', name: 'Edhala Thulasi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 39, studentId: '2300033494', name: 'K.NIHARIKA', branchAndYear: 'CSE', role: 'Member' },
    { sno: 40, studentId: '2300033527', name: 'Pranavi Lade', branchAndYear: 'CSE', role: 'Member' },
    { sno: 41, studentId: '2300033715', name: 'T.jahnavi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 42, studentId: '2300033816', name: 'Talladi.Chandra Kranthi Prabhavathi', branchAndYear: 'CSE', role: 'Member' },
    { sno: 43, studentId: '2300033874', name: 'CHINNAMALIREDDY GARI KEERTHANA REDDY', branchAndYear: 'CSE', role: 'Member' },
    { sno: 44, studentId: '2300040157', name: 'P HAARIKA', branchAndYear: 'ECE', role: 'Member' },
    { sno: 45, studentId: '2300040211', name: 'VENNAMANENI BALA VYSHNAVI', branchAndYear: 'ECE', role: 'Member' },
    { sno: 46, studentId: '2300060019', name: 'KASIREDDY VARSHINI', branchAndYear: 'EEE', role: 'Member' },
    { sno: 47, studentId: '2300090033', name: 'N.Naga Anjali', branchAndYear: 'CSIT', role: 'Member' },
    { sno: 48, studentId: '2300090073', name: 'Ponaka Dakshitha', branchAndYear: 'CSIT', role: 'Member' },
    { sno: 49, studentId: '2300090275', name: 'J.pravallika', branchAndYear: 'CSIT', role: 'Member' },
    { sno: 50, studentId: '2300090375', name: 'ch.bhargavi', branchAndYear: 'CSIT', role: 'Member' },
    { sno: 51, studentId: '2300090390', name: 'Kanugonda vyshnavi reddy', branchAndYear: 'CSIT', role: 'Member' },
    { sno: 52, studentId: '2300030871', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 53, studentId: '2300030046', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 54, studentId: '2300032841', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 55, studentId: '2300032954', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 56, studentId: '2300033402', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 57, studentId: '2300040178', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 58, studentId: '2300031099', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 59, studentId: '2300031099', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 60, studentId: '2300033800', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 61, studentId: '2300032592', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 62, studentId: '2300090249', name: 'NA', branchAndYear: 'NA', role: 'Member' },
    { sno: 63, studentId: '2300030992', name: 'NA', branchAndYear: 'NA', role: 'Member' }
];

const Page = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMembers, setFilteredMembers] = useState(membersData);

    useEffect(() => {
        const newFilteredMembers = membersData.filter(
            (member) =>
                member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.studentId.includes(searchQuery)
        );
        setFilteredMembers(newFilteredMembers);
    }, [searchQuery]);

    return (
        <div className='MembersComponent'>
            <div className="MembersContainer">
                <div className="MembersHeader">
                    <div className="MembersHeader-in">
                        <h1>Community of Contributors</h1>
                    </div>
                </div>
                <div className="pre-table">
                    <div className="pre-table-in">
                        <div className="SearchContainer">
                            <input
                                type="text"
                                placeholder="Search by name or student ID"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="MembersList">
                    <table>
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Student Id</th>
                                <th>Name</th>
                                <th>Branch & Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMembers.map((member) => (
                                <tr key={member.sno}>
                                    <td>{member.sno}</td>
                                    <td>{member.studentId}</td>
                                    <td>{member.name}</td>
                                    <td>{member.branchAndYear}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Page;