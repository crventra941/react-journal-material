import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import { BooksPage } from "../pages/BooksPage"
import { ExternalDocumentsPage } from "../pages/ExternalDocuments"
import { QueriesPage } from "../pages/QueriesPage"

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/external-documents" element={<ExternalDocumentsPage />} />
      <Route path="/queries" element={<QueriesPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
