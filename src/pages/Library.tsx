
import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import { LibrarySearchResults, LibraryChatInput } from "@/components/LibrarySection";

const initialFiles = [
  {
    id: "1",
    title: "Introduction to Artificial Intelligence",
    description: "A comprehensive guide to AI concepts, methodologies, and applications.",
    type: "pdf",
    dateAdded: new Date(2023, 3, 15),
  },
  {
    id: "2",
    title: "Data Science for Beginners",
    description: "Learn the fundamentals of data analysis, visualization, and interpretation.",
    type: "pdf",
    dateAdded: new Date(2023, 4, 20),
  },
  {
    id: "3",
    title: "Advanced Physics Lecture Series",
    description: "University-level lectures covering quantum mechanics and relativity.",
    type: "video",
    dateAdded: new Date(2023, 5, 5),
  },
  {
    id: "4",
    title: "Calculus Made Simple",
    description: "Step-by-step guide to differential and integral calculus.",
    type: "pdf",
    dateAdded: new Date(2023, 2, 10),
  },
  {
    id: "5",
    title: "Organic Chemistry Fundamentals",
    description: "Essential principles and reactions in organic chemistry.",
    type: "pdf",
    dateAdded: new Date(2023, 1, 25),
  },
  {
    id: "6",
    title: "World History: Modern Era",
    description: "Comprehensive coverage of global historical events from 1750 to present.",
    type: "pdf",
    dateAdded: new Date(2023, 0, 30),
  },
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState(initialFiles);

  const filteredFiles = searchQuery.trim()
    ? files.filter(file =>
        file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : files;

  return (
    <div className="min-h-screen bg-white p-6">
      <NavigationBar />
      
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-lg p-6 mb-4">
          <LibrarySearchResults
            files={filteredFiles}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <LibraryChatInput />
        </div>
      </div>
    </div>
  );
};

export default Library;
