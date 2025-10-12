"use client"
import { useState, useMemo } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

interface Contact {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  leads: number;
  status: string;
  lastLead: string;
  assignedTo: string;
}

export default function AllContacts() {
  const [searchEmail, setSearchEmail] = useState('');
  const [salesperson, setSalesperson] = useState('All');
  const [contactStatus, setContactStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [selectedSalesperson, setSelectedSalesperson] = useState('');
  const itemsPerPage: number = 10;

  const salespeople = ['Jay Ferrel', 'john snow', 'bryan Cranston', 'jesse pinkman'];

  const [contactsData, setContactsData] = useState<Contact[]>([
    { id: '1', name: 'Jean Vedral Delouis', email: 'vednaltok@gmail.com', phoneNumber: '7177122859', leads: 1, status: 'General Contact', lastLead: '6 April 2023', assignedTo: 'Unassigned' },
    { id: '2', name: 'John Wilson', email: 'robert@gmail.com', phoneNumber: '3128987102', leads: 5, status: 'General Contact', lastLead: '6 April 2023', assignedTo: 'Jay Ferrel' },
    { id: '3', name: 'Sarah Martinez', email: 'sarah.m@gmail.com', phoneNumber: '4155678901', leads: 3, status: 'looking', lastLead: '7 April 2023', assignedTo: 'john snow' },
    { id: '4', name: 'Michael Brown', email: 'mbrown@gmail.com', phoneNumber: '6198765432', leads: 2, status: 'General Contact', lastLead: '5 April 2023', assignedTo: 'Unassigned' },
    { id: '5', name: 'Emily Davis', email: 'emily.davis@gmail.com', phoneNumber: '8582341234', leads: 7, status: 'looking', lastLead: '8 April 2023', assignedTo: 'bryan Cranston' },
    { id: '6', name: 'David Johnson', email: 'djohnson@gmail.com', phoneNumber: '9165551234', leads: 4, status: 'not looking', lastLead: '4 April 2023', assignedTo: 'Jesse pinkman' },
    { id: '7', name: 'Lisa Anderson', email: 'lisa.a@gmail.com', phoneNumber: '7145678900', leads: 1, status: 'General Contact', lastLead: '9 April 2023', assignedTo: 'Unassigned' },
    { id: '8', name: 'Robert Taylor', email: 'rtaylor@gmail.com', phoneNumber: '8589876543', leads: 6, status: 'looking', lastLead: '3 April 2023', assignedTo: 'Jay Ferrel' },
    { id: '9', name: 'Jennifer White', email: 'jwhite@gmail.com', phoneNumber: '9163334567', leads: 2, status: 'General Contact', lastLead: '10 April 2023', assignedTo: 'Unassigned' },
    { id: '10', name: 'William Garcia', email: 'wgarcia@gmail.com', phoneNumber: '6197778888', leads: 8, status: 'looking', lastLead: '2 April 2023', assignedTo: 'john snow' },
    { id: '11', name: 'Patricia Miller', email: 'pmiller@gmail.com', phoneNumber: '7144445555', leads: 3, status: 'not looking', lastLead: '11 April 2023', assignedTo: 'bryan Cranston' },
    { id: '12', name: 'James Rodriguez', email: 'jrodriguez@gmail.com', phoneNumber: '8586667777', leads: 5, status: 'General Contact', lastLead: '1 April 2023', assignedTo: 'Unassigned' },
    { id: '13', name: 'Mary Martinez', email: 'mmartinez@gmail.com', phoneNumber: '9162223333', leads: 1, status: 'looking', lastLead: '12 April 2023', assignedTo: 'Jay Ferrel' },
    { id: '14', name: 'Christopher Lee', email: 'clee@gmail.com', phoneNumber: '4159990000', leads: 9, status: 'General Contact', lastLead: '13 April 2023', assignedTo: 'jesse pinkman' },
    { id: '15', name: 'Barbara Walker', email: 'bwalker@gmail.com', phoneNumber: '6191112222', leads: 4, status: 'not looking', lastLead: '14 April 2023', assignedTo: 'Unassigned' },
    { id: '16', name: 'Daniel Hall', email: 'dhall@gmail.com', phoneNumber: '7148889999', leads: 2, status: 'General Contact', lastLead: '15 April 2023', assignedTo: 'john snow' },
    { id: '17', name: 'Susan Allen', email: 'sallen@gmail.com', phoneNumber: '8587776666', leads: 6, status: 'looking', lastLead: '16 April 2023', assignedTo: 'Unassigned' },
    { id: '18', name: 'Matthew Young', email: 'myoung@gmail.com', phoneNumber: '9164445555', leads: 3, status: 'General Contact', lastLead: '17 April 2023', assignedTo: 'bryan Cranston' },
    { id: '19', name: 'Jessica King', email: 'jking@gmail.com', phoneNumber: '4156667788', leads: 7, status: 'not looking', lastLead: '18 April 2023', assignedTo: 'Jay Ferrel' },
    { id: '20', name: 'Anthony Wright', email: 'awright@gmail.com', phoneNumber: '6193334444', leads: 1, status: 'looking', lastLead: '19 April 2023', assignedTo: 'Unassigned' },
    { id: '21', name: 'Nancy Lopez', email: 'nlopez@gmail.com', phoneNumber: '7145556677', leads: 5, status: 'General Contact', lastLead: '20 April 2023', assignedTo: 'john snow' },
    { id: '22', name: 'Kevin Hill', email: 'khill@gmail.com', phoneNumber: '8588889900', leads: 4, status: 'looking', lastLead: '21 April 2023', assignedTo: 'jesse pinkman' },
    { id: '23', name: 'Karen Scott', email: 'kscott@gmail.com', phoneNumber: '9167778899', leads: 2, status: 'not looking', lastLead: '22 April 2023', assignedTo: 'Unassigned' },
    { id: '24', name: 'Steven Green', email: 'sgreen@gmail.com', phoneNumber: '4152223344', leads: 8, status: 'General Contact', lastLead: '23 April 2023', assignedTo: 'bryan Cranston' },
    { id: '25', name: 'Betty Adams', email: 'badams@gmail.com', phoneNumber: '6199998877', leads: 3, status: 'looking', lastLead: '24 April 2023', assignedTo: 'Unassigned' },
    { id: '26', name: 'Edward Baker', email: 'ebaker@gmail.com', phoneNumber: '7143332211', leads: 6, status: 'General Contact', lastLead: '25 April 2023', assignedTo: 'Jay Ferrel' },
    { id: '27', name: 'Dorothy Nelson', email: 'dnelson@gmail.com', phoneNumber: '8586665544', leads: 1, status: 'not looking', lastLead: '26 April 2023', assignedTo: 'john snow' },
    { id: '28', name: 'Brian Carter', email: 'bcarter@gmail.com', phoneNumber: '9161114433', leads: 9, status: 'looking', lastLead: '27 April 2023', assignedTo: 'Unassigned' },
    { id: '29', name: 'Helen Mitchell', email: 'hmitchell@gmail.com', phoneNumber: '4157778899', leads: 4, status: 'General Contact', lastLead: '28 April 2023', assignedTo: 'jesse pinkman' },
    { id: '30', name: 'Ronald Perez', email: 'rperez@gmail.com', phoneNumber: '6192225566', leads: 2, status: 'looking', lastLead: '29 April 2023', assignedTo: 'bryan Cranston' },
    { id: '31', name: 'Sandra Roberts', email: 'sroberts@gmail.com', phoneNumber: '7146668877', leads: 7, status: 'not looking', lastLead: '30 April 2023', assignedTo: 'Unassigned' },
    { id: '32', name: 'Kenneth Turner', email: 'kturner@gmail.com', phoneNumber: '8583334455', leads: 3, status: 'General Contact', lastLead: '1 May 2023', assignedTo: 'Jay Ferrel' },
    { id: '33', name: 'Donna Phillips', email: 'dphillips@gmail.com', phoneNumber: '9169990011', leads: 5, status: 'looking', lastLead: '2 May 2023', assignedTo: 'Unassigned' },
    { id: '34', name: 'Carol Campbell', email: 'ccampbell@gmail.com', phoneNumber: '4155557766', leads: 1, status: 'General Contact', lastLead: '3 May 2023', assignedTo: 'john snow' },
    { id: '35', name: 'Gary Parker', email: 'gparker@gmail.com', phoneNumber: '6196664422', leads: 8, status: 'not looking', lastLead: '4 May 2023', assignedTo: 'jesse pinkman' },
    { id: '36', name: 'Ruth Evans', email: 'revans@gmail.com', phoneNumber: '7142228833', leads: 4, status: 'looking', lastLead: '5 May 2023', assignedTo: 'Unassigned' },
    { id: '37', name: 'Frank Edwards', email: 'fedwards@gmail.com', phoneNumber: '8589991100', leads: 2, status: 'General Contact', lastLead: '6 May 2023', assignedTo: 'bryan Cranston' },
    { id: '38', name: 'Sharon Collins', email: 'scollins@gmail.com', phoneNumber: '9163336655', leads: 6, status: 'looking', lastLead: '7 May 2023', assignedTo: 'Jay Ferrel' },
    { id: '39', name: 'Larry Stewart', email: 'lstewart@gmail.com', phoneNumber: '4158885544', leads: 3, status: 'not looking', lastLead: '8 May 2023', assignedTo: 'Unassigned' },
    { id: '40', name: 'Michelle Sanchez', email: 'msanchez@gmail.com', phoneNumber: '6194447733', leads: 9, status: 'General Contact', lastLead: '9 May 2023', assignedTo: 'john snow' },
    { id: '41', name: 'Gregory Morris', email: 'gmorris@gmail.com', phoneNumber: '7147779922', leads: 1, status: 'looking', lastLead: '10 May 2023', assignedTo: 'jesse pinkman' },
    { id: '42', name: 'Angela Rogers', email: 'arogers@gmail.com', phoneNumber: '8582221133', leads: 5, status: 'General Contact', lastLead: '11 May 2023', assignedTo: 'Unassigned' },
    { id: '43', name: 'Eric Reed', email: 'ereed@gmail.com', phoneNumber: '9168887799', leads: 7, status: 'not looking', lastLead: '12 May 2023', assignedTo: 'bryan Cranston' },
    { id: '44', name: 'Deborah Cook', email: 'dcook@gmail.com', phoneNumber: '4151113366', leads: 2, status: 'looking', lastLead: '13 May 2023', assignedTo: 'Jay Ferrel' },
    { id: '45', name: 'Raymond Morgan', email: 'rmorgan@gmail.com', phoneNumber: '6198889955', leads: 4, status: 'General Contact', lastLead: '14 May 2023', assignedTo: 'Unassigned' },
    { id: '46', name: 'Cynthia Bell', email: 'cbell@gmail.com', phoneNumber: '7145554488', leads: 8, status: 'looking', lastLead: '15 May 2023', assignedTo: 'john snow' },
    { id: '47', name: 'Jeffrey Murphy', email: 'jmurphy@gmail.com', phoneNumber: '8586662200', leads: 3, status: 'not looking', lastLead: '16 May 2023', assignedTo: 'Unassigned' },
    { id: '48', name: 'Amy Bailey', email: 'abailey@gmail.com', phoneNumber: '9163339911', leads: 6, status: 'General Contact', lastLead: '17 May 2023', assignedTo: 'jesse pinkman' },
    { id: '49', name: 'Jacob Rivera', email: 'jrivera@gmail.com', phoneNumber: '4157776644', leads: 1, status: 'looking', lastLead: '18 May 2023', assignedTo: 'bryan Cranston' },
    { id: '50', name: 'Virginia Cooper', email: 'vcooper@gmail.com', phoneNumber: '6192224477', leads: 5, status: 'General Contact', lastLead: '19 May 2023', assignedTo: 'Unassigned' },
  ]);

  const filteredContacts = useMemo(() => {
    let filtered = [...contactsData];

    // Filter by email search
    if (searchEmail) {
      filtered = filtered.filter(contact => 
        contact.email.toLowerCase().includes(searchEmail.toLowerCase()) ||
        contact.name.toLowerCase().includes(searchEmail.toLowerCase())
      );
    }

    // Filter by salesperson
    if (salesperson !== 'All') {
      filtered = filtered.filter(contact => contact.assignedTo === salesperson);
    }

    // Filter by contact status
    if (contactStatus !== 'All') {
      filtered = filtered.filter(contact => contact.status === contactStatus);
    }

    return filtered;
  }, [contactsData, searchEmail, salesperson, contactStatus]);

  const totalPages: number = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentContacts: Contact[] = filteredContacts.slice(startIndex, endIndex);

  const goToPage = (page: number): void => {
    setCurrentPage(page);
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleEditClick = (contact: Contact) => {
    setSelectedContact(contact);
    setSelectedSalesperson('');
    setShowModal(true);
  };

  const handleSaveAssignment = () => {
    if (selectedContact && selectedSalesperson) {
      const updatedContacts = contactsData.map(contact => 
        contact.id === selectedContact.id 
          ? { ...contact, assignedTo: selectedSalesperson }
          : contact
      );
      setContactsData(updatedContacts);
      setShowModal(false);
      setSelectedContact(null);
      setSelectedSalesperson('');
    }
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 overflow-x-hidden ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-8 px-2 sm:px-5">
        <div
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-lg sm:text-[28px] font-semibold cursor-pointer"
        >
          <MdOutlineKeyboardArrowLeft size={24} className="sm:w-[35px] sm:h-[35px]" />
          <span className="hidden sm:inline">All Contacts</span>
          <span className="sm:hidden text-base">Contacts</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 mx-2 sm:mx-5 mb-4 sm:mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Search */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Search:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Contact By Email or Name"
                value={searchEmail}
                onChange={(e) => {
                  setSearchEmail(e.target.value);
                  handleFilterChange();
                }}
                className="w-full pl-3 pr-10 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Salesperson */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Salesperson</label>
            <div className="relative">
              <select
                value={salesperson}
                onChange={(e) => {
                  setSalesperson(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none cursor-pointer"
              >
                <option value="All">All</option>
                {salespeople.map(sp => (
                  <option key={sp} value={sp}>{sp}</option>
                ))}
              </select>
              <svg 
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" 
                width="16" 
                height="16" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Contact Status */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Contact Status</label>
            <div className="relative">
              <select
                value={contactStatus}
                onChange={(e) => {
                  setContactStatus(e.target.value);
                  handleFilterChange();
                }}
                className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none cursor-pointer"
              >
                <option value="All">All</option>
                <option value="General Contact">General Contact</option>
                <option value="looking">looking</option>
                <option value="not looking">not looking</option>
              </select>
              <svg 
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" 
                width="16" 
                height="16" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="px-2 sm:px-5">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
          <div 
            className="overflow-x-auto"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              scrollbarColor: '#9CA3AF #F3F4F6'
            }}
          >
            <table className="w-full min-w-[1000px]">
              <thead className=" border-b border-gray-200">
                <tr className='opacity-70'>
                  <th className="px-4 py-6 text-left text-sm font-medium text-gray-600">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Phone Number</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Leads</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Last Lead</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Assigned To</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentContacts.map((contact: Contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50 ">
                    <td className="px-4 py-5 text-sm text-gray-900 ">{contact.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{contact.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{contact.phoneNumber}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{contact.leads}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{contact.status}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{contact.lastLead}</td>
                    <td className="px-4 py-3 text-sm">
                      {contact.assignedTo === 'Unassigned' ? (
                        <span className="text-gray-500">
                          Unassigned - <button 
                            onClick={() => handleEditClick(contact)}
                            className="text-[#FFE135] font-medium"
                          >
                            Edit
                          </button>
                        </span>
                      ) : (
                        <span className="text-gray-700">{contact.assignedTo}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer with pagination */}
          <div className="border-t border-gray-200 px-4 py-6 md:flex flex-col sm:flex-row justify-between items-center gap-3">
            {/* Left side - Showing info */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-5 md:mb-0">
              <span>Showing</span>
              <span className='border px-4 rounded-md py-1'>{currentContacts.length}</span>
              <span>of {filteredContacts.length}</span>
            </div>

            {/* Right side - Pagination */}
            <div className="md:flex items-center gap-1">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                &lt;
              </button>
              
              {[...Array(totalPages)].map((_, index: number) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`px-3 py-1 rounded text-sm ${
                      currentPage === pageNum
                        ? 'bg-[#FFE135] font-medium'
                        : 'text-gray-600 bg-gray-100 hover:bg-yellow-300'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Assign Salesperson Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">Assign Salesperson</h2>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">
                  Contact: <span className="font-medium text-gray-900">{selectedContact?.name}</span>
                </label>
              </div>
              
              <div className="relative">
                <select
                  value={selectedSalesperson}
                  onChange={(e) => setSelectedSalesperson(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select a salesperson...</option>
                  {salespeople.map(sp => (
                    <option key={sp} value={sp}>{sp}</option>
                  ))}
                </select>
                <svg 
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedContact(null);
                  setSelectedSalesperson('');
                }}
                className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAssignment}
                disabled={!selectedSalesperson}
                className="px-4 py-2 text-sm bg-[#FFE135] rounded-md hover:bg-[#ffdc13] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}