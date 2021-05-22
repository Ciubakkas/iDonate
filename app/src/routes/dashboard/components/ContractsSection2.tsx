import React from "react";
//
// import { Table, Tag, Space } from "antd";

// import { NewContractCard2, FeedbackButton, FilterBar } from ".";
// import { ContractStatus, ContractFilterOption, UserType } from "src/types";

// export const ContractsSection2: view = ({
//   contracts: Object = get.contracts.listById,
//   userRole = get.user.data.role,
//   selectedFilter = get.dashboard.filterBy,
// }) => {
//   const contractsSoteredbyName: object[] = Object.values(contracts.value()).sort((a: any, b: any) =>
//     a?.name?.toUpperCase() <= b?.name?.toUpperCase() ? 1 : -1
//   );

//   let contractsToDisplay = contractsSoteredbyName;
//   if (selectedFilter.value() === ContractFilterOption.DRAFTS) {
//     contractsToDisplay = contractsToDisplay.filter((c: any) => c.status === ContractStatus.DRAFT);
//   }
//   if (selectedFilter.value() === ContractFilterOption.NEGOTIATIONS) {
//     contractsToDisplay = contractsToDisplay.filter((c: any) => c.status === ContractStatus.NEGOTIATION);
//   }
//   if (selectedFilter.value() === ContractFilterOption.FINALIZED) {
//     contractsToDisplay = contractsToDisplay.filter((c: any) => c.status === ContractStatus.SIGNING);
//   }
//   console.log("contractsSoteredbyName", contractsToDisplay);

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       render: (text: any) => <a>{text}</a>,
//     },
//     // {
//     //   title: "Age",
//     //   dataIndex: "age",
//     // },
//     // {
//     //   title: "Address",
//     //   dataIndex: "address",
//     // },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (tag: any) => {
//         let color = "cyan";
//         if (tag === "negotiation") color = "orange";
//         if (tag === "signing") color = "geekblue";
//         return (
//           <Tag color={color} key={tag}>
//             {tag.toUpperCase()}
//           </Tag>
//         );
//       },
//     },
//   ];

//   return (
//     <main className="container mx-auto w-full pt-40 pb-20">
//       <FilterBar />
//       <div className="mb-6">{userRole.value() === UserType.MANAGER ? <NewContractCard2 /> : null}</div>
//       <Table columns={columns} dataSource={contractsToDisplay} rowKey="id" />
//       <FeedbackButton />
//     </main>
//   );
// };
